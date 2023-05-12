import { Game } from "src/MooLite/core/Game";
import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { MooLiteTab } from "src/MooLite/core/plugins/MooLiteTab";

export class PluginManager {
    plugins: MooLitePlugin[];

    game: Game;

    constructor(game: Game, plugins: MooLitePlugin[]) {
        this.game = game;
        this.plugins = plugins;

        this.game.abilities.onAbilityXpGained.subscribe((gains) => {
            this.enabledPlugins.forEach((plugin) => {
                plugin.onAbilityXpGained?.(gains);
            });
        });

        this.game.abilities.onAbilityLvlGained.subscribe((gains) => {
            this.enabledPlugins.forEach((plugin) => {
                plugin.onAbilityLvlGained?.(gains);
            });
        });

        this.game.skills.onXpGained.subscribe((info) => {
            this.enabledPlugins.forEach((plugin) => {
                plugin.onXpGained?.(info);
            });
        });

        this.game.inventory.onItemGained.subscribe((itemGained) => {
            this.enabledPlugins.forEach((plugin) => {
                plugin.onItemGained?.(itemGained);
            });
        });

        this.game.inventory.onConsumableDepleted.subscribe((consumable) => {
            this.enabledPlugins.forEach((plugin) => {
                plugin.onConsumableDepleted?.(consumable);
            });
        });

        this.game.chat.onMessage.subscribe((chatMessage) => {
            this.enabledPlugins.forEach((plugin) => {
                plugin.onChatMessage?.(chatMessage);
            });
        });

        this.game.notifier.onNotification.subscribe((notification) => {
            this.enabledPlugins.forEach((plugin) => {
                plugin.onNotification?.(notification);
            });
        });

        this.game.actionQueue.onActionQueueUpdated.subscribe((queue) => {
            this.enabledPlugins.forEach((plugin) => {
                plugin.onActionQueueUpdated?.(queue);
            });
        });

        this.game.leaderboard.onLeaderboardUpdated.subscribe((topics) => {
            this.enabledPlugins.forEach((plugin) => {
                plugin.onLeaderboardUpdated?.(topics);
            });
        });

        this.game.lootBoxes.onLootBoxOpened.subscribe((lootBoxOpened) => {
            this.enabledPlugins.forEach((plugin) => {
                plugin.onLootBoxOpened?.(lootBoxOpened);
            });
        });

        // Inject the game into all plugins
        this.plugins.forEach((plugin) => {
            plugin.initialize(this.game);
        });
    }

    public get enabledPlugins(): MooLitePlugin[] {
        return this.plugins.filter((plugin) => plugin.isEnabled);
    }

    public get tabs(): MooLiteTab[] {
        return this.enabledPlugins.flatMap((plugin) => {
            return plugin.tab ? [plugin.tab] : [];
        });
    }

    clientTick(): void {
        this.enabledPlugins.forEach((plugin) => {
            plugin.onClientTick?.();
        });
    }
}
