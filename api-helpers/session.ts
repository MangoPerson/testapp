import SessionHandler from "./sessionHandler";
import { pb } from "@/components/functions";

// Queue implementation for utility, because TypeScript doesn't have one built in
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

type notes = { meanings: string[], other: string[] }
// Represents information about a term being learned or reviewed
interface TermInfo {
    type: 'vocab' | 'kanji' | 'none';
    id: string;
    term: string;
    meanings: string[];
    readings: string[] | { on: string[], kun: string[] };

    notes?: notes;
    time?: Date;
    level?: number;
}

function minutesFromNow(minutes: number) {
    const date = new Date();
    date.setMinutes(date.getMinutes() + minutes);

    return date;
}

export class LearnSession {
    private items: Queue<TermInfo>;
    private completed: TermInfo[] = [];
    private current?: TermInfo;
    private apiKey: string;

    // Default Info is necessary for when the queue runs out and something still needs to be returned
    private static readonly default: TermInfo = { type: 'none', id: '', term: '', meanings: [], readings: {on: [], kun: []}}

    constructor(items: TermInfo[], apiKey: string) {
        this.items = new Queue(items);
        this.apiKey = apiKey;
    }

    static async newKanjiSession(apiKey: string, amount: number) {
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
        
        return new LearnSession(terms, apiKey);
    }

    static async newVocabSession(apiKey: string, amount: number) {
        const data = await pb.collection('vocab').getList(1, amount, {
            filter: ""
        })
        const terms = data.items.map(e => ({
            type: 'vocab',
            id: e.id,
            term: e.term,
            meanings: e.meanings,
            readings: e.readings
        } as TermInfo));
        
        return new LearnSession(terms, apiKey);
    }

    getCurrent() {
        return this.current ? this.current : LearnSession.default;
    }

    pushNext(notes: notes) {
        this.current = this.items.pop();

        if (!this.current) {
            this.end();
            return;
        }

        this.current.time = minutesFromNow(5);
        this.current.level = 0;
        this.completed.push(this.current);
    }

    getNext(notes: notes) {
        this.pushNext(notes);
        return this.getCurrent();
    }

    updateDB() {
        this.completed.forEach(e => {
            pb.collection('reviews').create({
                notes: e.notes,
                level: 0,
                review_time: e.time,
                api_key: this.apiKey,
                type: e.type,
                review_id: e.id
            })
        })
    }   
}

export class ReviewSession extends LearnSession {
    
}
