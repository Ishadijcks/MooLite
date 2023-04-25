import {ChatMessage} from "src/MooLite/core/chat/ChatMessage";

export abstract class MooLitePlugin {
    isEnabled: boolean = true;


    abstract initialize(): void;

    onChatMessage?(message: ChatMessage): void;

}
