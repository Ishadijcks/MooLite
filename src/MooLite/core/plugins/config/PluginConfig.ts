import { PluginConfigType } from "src/MooLite/core/plugins/config/PluginConfigType";
import { PluginConfigOption } from "src/MooLite/core/plugins/config/PluginConfigOption";
import { PluginBuiltinOption } from "src/MooLite/core/plugins/config/PluginBuiltinOption";

export interface PluginConfig {
    key: string;
    name: string;
    description: string;
    type: PluginConfigType;
    value: any;
    options?: PluginConfigOption[] | PluginBuiltinOption;
}
