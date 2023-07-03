import { ChatMessage } from "src/MooLite/core/chat/ChatMessage";
import { XpGained } from "src/MooLite/core/skills/Skills";
import { MooLiteTab } from "src/MooLite/core/plugins/MooLiteTab";
import { PluginConfig } from "src/MooLite/core/plugins/config/PluginConfig";
import { MooNotification } from "src/MooLite/core/notifications/MooNotification";
import { Game } from "src/MooLite/core/Game";
import { CharacterAction } from "src/MooLite/core/actions/CharacterAction";
import { AbilitySlotChanged, AbilityXpGained } from "src/MooLite/core/abilities/Abilities";
import { LeaderboardTopic } from "src/MooLite/core/leaderboard/LeaderboardTopic";
import { ItemGained } from "src/MooLite/core/inventory/Inventory";
import { PluginBuiltinOption } from "src/MooLite/core/plugins/config/PluginBuiltinOption";
import { LootBoxOpened } from "src/MooLite/core/lootboxes/LootBoxOpened";
import { CharacterConsumable } from "src/MooLite/core/inventory/items/CharacterConsumable";
import { PluginAuthorCredits } from "src/MooLite/core/plugins/PluginAuthorCredits";

export abstract class MooLitePlugin {
    abstract name: string;
    abstract key: string;
    abstract description: string;

    abstract credits: PluginAuthorCredits;

    protected _isEnabled: boolean = false;
    protected _canBeDisabled: boolean = true;

    public get canBeDisabled(): boolean {
        return this._canBeDisabled;
    }

    config: PluginConfig[] = [];

    public getConfig(key: string): PluginConfig {
        return this.config.find((config) => config.key === key) as PluginConfig;
    }

    public get hasConfig(): boolean {
        return this.config.length > 0;
    }

    public get isEnabled(): boolean {
        return this._isEnabled;
    }

    public set isEnabled(value: boolean) {
        if (value) {
            this.enable();
        } else {
            this.disable();
        }
    }

    tab?: MooLiteTab;

    protected _game!: Game;

    initialize(game: Game): void {
        this._game = game;

        this.config.forEach((config) => {
            if (typeof config.options === "string") {
                switch (config.options as PluginBuiltinOption) {
                    case PluginBuiltinOption.Monsters:
                        config.options = this._game.combat.monsterDetailList.map((monster) => ({
                            text: monster.name,
                            value: monster.hrid,
                        }));
                        break;
                    case PluginBuiltinOption.Items:
                        config.options = this._game.inventory.sortedAlphabeticalItems.map((item) => ({
                            text: item.name,
                            value: item.hrid,
                        }));
                        break;
                    default:
                        console.error(`Unrecognized builtin option '${config.options}'`);
                        return [];
                }
            }
        });
    }

    enable(): void {
        this._isEnabled = true;
    }

    disable(): void {
        if (this._canBeDisabled) {
            this._isEnabled = false;
        }
    }

    onChatMessage?(message: ChatMessage): void;

    onNotification?(notification: MooNotification): void;

    onXpGained?(gains: XpGained): void;

    onActionQueueUpdated?(queue: CharacterAction[]): void;

    onAbilityXpGained?(gains: AbilityXpGained): void;

    onAbilityLvlGained?(gains: AbilityXpGained): void;

    onAbilitySlotChanged?(slotChanged: AbilitySlotChanged): void;

    onLeaderboardUpdated?(topics: LeaderboardTopic[]): void;

    onLootBoxOpened?(lootBoxOpened: LootBoxOpened): void;

    onItemGained?(itemGained: ItemGained): void;

    onConsumableDepleted?(consumable: CharacterConsumable): void;

    onClientTick?(): void;

    /**
     * Allows you to store a data object between sessions
     */
    save?(): Record<string, any>;

    /**
     * Load the data from local storage. Make sure to sanitize it properly as it could contain anything
     */
    load?(data: Record<string, any>): void;
}
