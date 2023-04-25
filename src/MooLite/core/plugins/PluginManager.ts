import {MooLitePlugin} from "src/MooLite/plugins/MooLitePlugin";
import {ChatNotifierPlugin} from "src/MooLite/plugins/ChatNotifier/ChatNotifierPlugin";
import {Game} from "src/MooLite/core/Game";
import {XpDetailsPlugin} from "src/MooLite/plugins/XpDetails/XpDetailsPlugin";

export class PluginManager {
    plugins: MooLitePlugin[] = [
        new ChatNotifierPlugin(),
        new XpDetailsPlugin(),
    ];

    game: Game;

    constructor(game: Game) {
        this.game = game;

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
    }

    public get enabledPlugins(): MooLitePlugin[] {
        return this.plugins.filter(plugin => plugin.isEnabled);
    }
}
