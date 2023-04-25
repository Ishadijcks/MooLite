import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import {MooLite} from "src/MooLite/core/MooLite";
import {MooSocket} from "src/MooLite/core/MooSocket";

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
    window.mooLite = new MooLite(window.mooSocket);

    createApp(App).mount(
        (() => {
            const app = document.createElement('div');
            document.body.append(app);
            return app;
        })(),
    );
    console.log("MooLite connected successfully")
}

launchMooLite();
