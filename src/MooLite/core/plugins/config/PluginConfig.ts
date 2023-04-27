import {PluginConfigType} from "src/MooLite/core/plugins/config/PluginConfigType";

export interface PluginConfig {
    key: string;
    name: string;
    description: string;
    type: PluginConfigType;
    value: any;
}
