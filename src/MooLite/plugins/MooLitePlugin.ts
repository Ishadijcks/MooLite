import {ChatMessage} from "src/MooLite/core/chat/ChatMessage";
import {XpGained} from "src/MooLite/core/skills/Skills";
import {MooLiteTab} from "src/MooLite/core/plugins/MooLiteTab";

export abstract class MooLitePlugin {
    abstract name: string;
    isEnabled: boolean = true;

    tab?: MooLiteTab;

    initialize?(): void;

    onChatMessage?(message: ChatMessage): void;

    onXpGained?(xpGained: XpGained): void;
}
