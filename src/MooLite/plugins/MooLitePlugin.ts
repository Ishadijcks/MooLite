import {ChatMessage} from "src/MooLite/core/chat/ChatMessage";
import {XpGained} from "src/MooLite/core/skills/Skills";

export abstract class MooLitePlugin {
    abstract name: string;
    isEnabled: boolean = true;

    initialize?(): void;

    onChatMessage?(message: ChatMessage): void;

    onXpGained?(xpGained: XpGained): void;
}
