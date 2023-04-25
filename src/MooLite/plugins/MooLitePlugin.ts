import {ChatMessage} from "src/MooLite/core/chat/ChatMessage";

export abstract class MooLitePlugin {
    abstract name: string;
    isEnabled: boolean = true;


    abstract initialize(): void;

    onChatMessage?(message: ChatMessage): void;

}
