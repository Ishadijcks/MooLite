import {createApp, reactive} from 'vue';
import './style.css';
import App from './App.vue';
import {MooLite} from "src/MooLite/core/MooLite";
import {MooSocket} from "src/MooLite/core/MooSocket";
import {ChatNotifierPlugin} from "src/MooLite/plugins/ChatNotifier/ChatNotifierPlugin";
import {XpTrackerPlugin} from "src/MooLite/plugins/XpDetails/XpTrackerPlugin";
import {Game} from "src/MooLite/core/Game";
import {PluginManager} from "src/MooLite/core/plugins/PluginManager";

// Override the WebSocket
window.WebSocket = MooSocket;

declare global {
    interface Window {
        mooSocket: MooSocket;
        mooLite: MooLite;
    }
}

// TODO(@Isha): Properly await till window.mooSocket is set
const launchMooLite = () => {
    if (!window.mooSocket) {
        console.log("MooLite not initialized, checking again...")
        setTimeout(launchMooLite, 10);
        return;
    }

    const plugins = [
        reactive(new ChatNotifierPlugin()),
        reactive(new XpTrackerPlugin()),
    ]

    const game = reactive<Game>(new Game()) as Game;
    const pluginManager = reactive<PluginManager>(new PluginManager(game, plugins)) as PluginManager;
    const mooLite = reactive(new MooLite(game, pluginManager, window.mooSocket)) as MooLite;

    const app = createApp(App, {client: mooLite});
    app.mount(
        (() => {
            const app = document.createElement('div');
            document.body.append(app);
            return app;
        })(),
    );

    // Register custom components
    plugins.forEach(plugin => {
        if (plugin.tab) {
            console.log("Registering custom component", plugin.tab.componentName)
            app.component(plugin.tab.componentName, plugin.tab.component);
        }
    })

    console.log("MooLite connected successfully")
}

launchMooLite();
