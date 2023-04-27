import {ChatMessage} from "src/MooLite/core/chat/ChatMessage";
import {XpGained} from "src/MooLite/core/skills/Skills";
import {MooLiteTab} from "src/MooLite/core/plugins/MooLiteTab";
import {PluginConfig} from "src/MooLite/core/plugins/config/PluginConfig";
import {MooNotification} from "src/MooLite/core/notifications/MooNotification";
import {Game} from "src/MooLite/core/Game";
import {CharacterAction} from "src/MooLite/core/actions/CharacterAction";
import {AbilityXpGained} from "src/MooLite/core/abilities/Abilities";

export abstract class MooLitePlugin {
    abstract name: string;
    abstract description: string;

    isEnabled: boolean = true;

    config: PluginConfig[] = [];

    public getConfig(key: string): PluginConfig | undefined {
        return this.config.find(config => config.key === key);
    }

    public get hasConfig(): boolean {
        return this.config.length > 0;
    }

    tab?: MooLiteTab;

    protected _game!: Game;

    initialize(game: Game): void {
        this._game = game;
    };

    onChatMessage?(message: ChatMessage): void;

    onNotification?(notification: MooNotification): void;

    onXpGained?(gains: XpGained): void;

    onActionQueueUpdated?(queue: CharacterAction[]): void;

    onAbilityXpGained?(gains: AbilityXpGained): void;

    onAbilityLvlGained?(gains: AbilityXpGained): void;
}
