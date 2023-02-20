import SessionHandler from "./sessionHandler";
import { pb } from "@/components/functions";

class Queue<T> {
    private _items: T[];

    constructor(items?: T[]) {
        this._items = items ? items : [];
    }

    push(item: T) {
        this._items.push(item);
    }

    pop() {
        return this._items.pop();
    }

}

interface TermInfo {
    type: 'vocab' | 'kanji' | 'none';
    id: string;
    term: string;
    meanings: string[];
    readings: string[] | { on: string[], kun: string[] };
}

export class LearnSession {
    private items: Queue<TermInfo>;
    private learned: TermInfo[] = [];
    private current?: TermInfo;
    private handler?: SessionHandler;

    private static readonly default: TermInfo = { type: 'none', id: '', term: '', meanings: [], readings: {on: [], kun: []}}

    constructor(items: TermInfo[], handler?: SessionHandler) {
        this.items = new Queue(items);
        this.handler = handler;
    }

    static async newKanji(apiKey: string, amount: number, handler: SessionHandler) {
        const data = await pb.collection('kanji').getList(1, amount, {
            filter: ""
        });
        const terms = data.items.map(e => ({
            type: 'kanji',
            id: e.id,
            term: e.kanji,
            meanings: e.meanings,
            readings: {
                on: e.onyomi,
                kun: e.kunyomi
            }
        } as TermInfo));
        
        return new LearnSession(terms, handler);
    }

    static async newVocab(apiKey: string, amount: number) {
        const data = await pb.collection('vocab').getList(1, amount, {
            filter: ""
        })
    }

    getCurrent() {
        return this.current ? this.current : LearnSession.default;
    }

    next() {
        this.current = this.items.pop();
        if (!this.current) {
            this.end();
        }
    }

    end() {

    }
}