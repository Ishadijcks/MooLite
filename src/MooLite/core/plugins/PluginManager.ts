import {MooLitePlugin} from "src/MooLite/plugins/MooLitePlugin";
import {ChatNotifierPlugin} from "src/MooLite/plugins/ChatNotifier/ChatNotifierPlugin";
import {MooSocket} from "src/MooLite/core/MooSocket";

export class PluginManager {
    plugins: MooLitePlugin[] = [
        new ChatNotifierPlugin(),
    ];

    mooSocket: MooSocket;

    constructor(mooSocket: MooSocket) {
        this.mooSocket = mooSocket;

        this.mooSocket.onChatMessage.subscribe(message => {
            this.enabledPlugins.forEach(plugin => {
                plugin.onChatMessage?.(message);
            })
        })
    }

    public get enabledPlugins(): MooLitePlugin[] {
        return this.plugins.filter(plugin => plugin.isEnabled);
    }
}
