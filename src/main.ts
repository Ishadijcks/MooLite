import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import {PluginManager} from "src/MooLite/core/plugins/PluginManager";
import {MooLite} from "src/MooLite/core/MooLite";
import {MooSocket} from "src/MooLite/core/MooSocket";

createApp(App).mount(
    (() => {
        const app = document.createElement('div');
        document.body.append(app);
        return app;
    })(),
);

// Override the WebSocket
window.WebSocket = MooSocket;

declare global {
    interface Window {
        mooSocket: MooSocket;
        mooLite: MooLite;
    }
}

// TODO(@Isha): Properly await till window.mooSocket is set
setTimeout(() => {
    if (!window.mooSocket) {
        console.log("MooLite failed to connect")
        return;
    }
    const pluginManager = new PluginManager(window.mooSocket);
    window.mooLite = new MooLite(
        pluginManager,
        window.mooSocket,
    );
    console.log("MooLite connected successfully")
}, 1000)

