import {PluginManager} from "src/MooLite/core/plugins/PluginManager";
import {MooSocket} from "src/MooLite/core/MooSocket";

export class MooLite {
    pluginManager: PluginManager;
    mooSocket: MooSocket;


    constructor(pluginManager: PluginManager, mooSocket: MooSocket) {
        this.pluginManager = pluginManager;
        this.mooSocket = mooSocket;
    }
}
