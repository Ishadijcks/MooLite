import {ChatMessage} from "src/MooLite/core/chat/ChatMessage";
import {SkillInfo} from "src/MooLite/core/skills/SkillInfo";

export abstract class MooLitePlugin {
    abstract name: string;
    isEnabled: boolean = true;

    initialize?(): void;

    onChatMessage?(message: ChatMessage): void;

    onXpGained?(info: SkillInfo): void;
}
