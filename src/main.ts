import { unsafeWindow } from "$";
import { createApp, reactive } from "vue";
import "./style.css";
import App from "./App.vue";
import { IdleNotifierPlugin } from "src/MooLite/plugins/IdleNotifier/IdleNotifierPlugin";
import { MooLite } from "src/MooLite/core/MooLite";
import { MooSocket } from "src/MooLite/core/MooSocket";
import { ChatNotifierPlugin } from "src/MooLite/plugins/ChatNotifier/ChatNotifierPlugin";
import { XpTrackerPlugin } from "src/MooLite/plugins/XpDetails/XpTrackerPlugin";
import { Game } from "src/MooLite/core/Game";
import { PluginManager } from "src/MooLite/core/plugins/PluginManager";
import { MooLiteClientPlugin } from "src/MooLite/plugins/MooLite/MooLiteClientPlugin";
import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { LootSimulatorPlugin } from "src/MooLite/plugins/LootSimulator/LootSimulatorPlugin";
import { ItemFinderPlugin } from "src/MooLite/plugins/ItemFinder/ItemFinderPlugin";
import { LeaderboardPlugin } from "src/MooLite/plugins/Leaderboard/LeaderboardPlugin";
import { LootNotifierPlugin } from "src/MooLite/plugins/LootNotifier/LootNotifierPlugin";
import { ConsumableNotifierPlugin } from "./MooLite/plugins/ConsumableNotifier/ConsumableNotifierPlugin";

declare global {
    interface Window {
        mooSocket: MooSocket;
        WebSocket: typeof MooSocket;
    }
}

if (process.env.NODE_ENV === "production") {
    unsafeWindow.WebSocket = MooSocket;
}

const maxTries = 100;
let tries = 0;
const launchMooLite = () => {
    const mooSocket = unsafeWindow.mooSocket;
    if (!mooSocket) {
        if (tries++ === maxTries) {
            console.error("MooLite did not initialize in time");
        }
        setTimeout(launchMooLite, 10);
        return;
    }

    mooSocket.onInitClientInfoMessage.subscribe((clientInfo) => {
        // Create the game with the init client info
        const game = reactive<Game>(new Game(clientInfo)) as Game;

        // Define a list of awesome plugins
        const plugins = reactive([
            new MooLiteClientPlugin(),
            new ChatNotifierPlugin(),
            new XpTrackerPlugin(),
            new IdleNotifierPlugin(),
            new LootSimulatorPlugin(),
            new LootNotifierPlugin(),
            new ItemFinderPlugin(),
            new LeaderboardPlugin(),
            new ConsumableNotifierPlugin(),
        ]) as unknown as MooLitePlugin[];
        const pluginManager = reactive<PluginManager>(new PluginManager(game, plugins)) as PluginManager;

        // Create the game client
        const mooLite = reactive(new MooLite(game, pluginManager, mooSocket)) as MooLite;

        // Mount the Vue app
        const app = createApp(App, { client: mooLite });
        app.mount(
            (() => {
                const app = document.createElement("div");
                document.body.append(app);
                return app;
            })()
        );

        // Register custom components
        plugins.forEach((plugin) => {
            if (plugin.tab) {
                console.debug("Registering custom component", plugin.tab.componentName);
                app.component(plugin.tab.componentName, plugin.tab.component);
            }
        });

        console.log("MooLite connected successfully");
    });
};

launchMooLite();
