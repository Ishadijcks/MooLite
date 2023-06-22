import { ConversationMessage } from "src/MooLite/plugins/WhisperManager/ConversationMessage";

export class Conversation {
    private _messages: ConversationMessage[] = [];

    constructor(messages: ConversationMessage[]) {
        this._messages = messages;
    }

    public get messages(): ConversationMessage[] {
        return this._messages;
    }

    public addMessage(message: ConversationMessage): void {
        this._messages.unshift(message);
    }

    public addMessages(messages: ConversationMessage[]): void {
        this._messages.unshift(...messages);
    }
}