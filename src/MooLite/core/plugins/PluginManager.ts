import {MooLitePlugin} from "src/MooLite/plugins/MooLitePlugin";
import {Game} from "src/MooLite/core/Game";
import {MooLiteTab} from "src/MooLite/core/plugins/MooLiteTab";

export class PluginManager {
    plugins: MooLitePlugin[];

    game: Game;

    constructor(game: Game, plugins: MooLitePlugin[]) {
        this.game = game;
        this.plugins = plugins;

        console.log(this.game);
        this.game.skills.onXpGained.subscribe(info => {
            this.enabledPlugins.forEach(plugin => {
                plugin.onXpGained?.(info);
            })
        })
        this.game.chat.onMessage.subscribe(chatMessage => {
            this.enabledPlugins.forEach(plugin => {
                plugin.onChatMessage?.(chatMessage);
            })
        })

        this.plugins.forEach(plugin => {
            plugin.initialize?.();
        })
    }

    public get enabledPlugins(): MooLitePlugin[] {
        return this.plugins.filter(plugin => plugin.isEnabled);
    }

    public get tabs(): MooLiteTab[] {
        return this.enabledPlugins.flatMap(plugin => {
            return plugin.tab ? [plugin.tab] : [];
        })
    }
}
