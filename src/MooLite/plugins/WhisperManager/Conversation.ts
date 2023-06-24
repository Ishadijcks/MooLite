import { ConversationMessage } from "src/MooLite/plugins/WhisperManager/ConversationMessage";

export class Conversation {
    private _messages: ConversationMessage[] = [];
    private _unread: boolean = false;
    private _hidden: boolean = false;

    constructor(messages: ConversationMessage[]) {
        this._messages = messages;
    }

    public get unread(): boolean {
        return this._unread;
    }

    public get messages(): ConversationMessage[] {
        return this._messages;
    }

    public get hidden(): boolean {
        return this._hidden;
    }

    public hide(): void {
        this._hidden = true;
    }

    public show(): void {
        this._hidden = false;
    }

    public toggleUnread(): void {
        this._unread = !this._unread;
    }

    public addMessage(message: ConversationMessage): void {
        this._messages.unshift(message);
    }

    public addMessages(messages: ConversationMessage[]): void {
        this._messages.unshift(...messages);
    }
}
