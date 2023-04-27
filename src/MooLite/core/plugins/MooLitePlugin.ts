import {ChatMessage} from "src/MooLite/core/chat/ChatMessage";
import {XpGained} from "src/MooLite/core/skills/Skills";
import {MooLiteTab} from "src/MooLite/core/plugins/MooLiteTab";
import {PluginConfig} from "src/MooLite/core/plugins/config/PluginConfig";
import {MooNotification} from "src/MooLite/core/notifications/MooNotification";
import {Game} from "src/MooLite/core/Game";

export abstract class MooLitePlugin {
    abstract name: string;
    isEnabled: boolean = true;

    config: PluginConfig[] = [];

    public getConfig(key: string): PluginConfig | undefined {
        return this.config.find(config => config.key === key);
    }

    tab?: MooLiteTab;

    initialize?(game: Game): void;

    onChatMessage?(message: ChatMessage): void;

    onNotification?(notification: MooNotification): void;

    onXpGained?(xpGained: XpGained): void;
}
