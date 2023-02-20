import { LearnSession } from "./session";

export default class SessionHandler {
    private sessions = new Map<string, LearnSession >();

    constructor() {

    }

    addSession() {
        
    }

    removeSession(id: string) {
        this.sessions.delete(id);
    }
}