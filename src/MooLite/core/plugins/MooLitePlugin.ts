import {ChatMessage} from "src/MooLite/core/chat/ChatMessage";
import {XpGained} from "src/MooLite/core/skills/Skills";
import {MooLiteTab} from "src/MooLite/core/plugins/MooLiteTab";
import {PluginConfig} from "src/MooLite/core/plugins/config/PluginConfig";
import {MooNotification} from "src/MooLite/core/notifications/MooNotification";
import {Game} from "src/MooLite/core/Game";
import {CharacterAction} from "src/MooLite/core/actions/CharacterAction";
import {AbilityXpGained} from "src/MooLite/core/abilities/Abilities";
import {LeaderboardTopic} from "src/MooLite/core/leaderboard/LeaderboardTopic";
import {ItemGained} from "src/MooLite/core/inventory/Inventory";
import {PluginBuiltinOption} from "src/MooLite/core/plugins/config/PluginBuiltinOption";

export abstract class MooLitePlugin {
    abstract name: string;
    abstract description: string;

    isEnabled: boolean = true;

    config: PluginConfig[] = [];

    public getConfig(key: string): PluginConfig {
        return this.config.find(config => config.key === key) as PluginConfig;
    }

    public get hasConfig(): boolean {
        return this.config.length > 0;
    }

    tab?: MooLiteTab;

    protected _game!: Game;

    initialize(game: Game): void {
        this._game = game;

        this.config.forEach(config => {
            if (typeof config.options === "string") {
                switch ((config.options as PluginBuiltinOption)) {
                    case PluginBuiltinOption.Monsters:
                        config.options = this._game.combat.monsterDetailList.map(monster => ({
                            text: monster.name,
                            value: monster.hrid,
                        }))
                        break;
                    case PluginBuiltinOption.Items:
                        config.options = this._game.inventory.sortedAlphabeticalItems.map(item => ({
                            text: item.name,
                            value: item.hrid,
                        }))
                        break;
                    default:
                        console.error(`Unrecognized builtin option '${config.options}'`)
                        return [];
                }
            }
        })
    };

    onChatMessage?(message: ChatMessage): void;

    onNotification?(notification: MooNotification): void;

    onXpGained?(gains: XpGained): void;

    onActionQueueUpdated?(queue: CharacterAction[]): void;

    onAbilityXpGained?(gains: AbilityXpGained): void;

    onAbilityLvlGained?(gains: AbilityXpGained): void;

    onLeaderboardUpdated?(topics: LeaderboardTopic[]): void

    onItemGained?(itemGained: ItemGained): void;
}
