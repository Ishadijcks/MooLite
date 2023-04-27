import {markRaw} from "vue";
import {MooLitePlugin} from "src/MooLite/core/plugins/MooLitePlugin";
import {XpGained} from "src/MooLite/core/skills/Skills";
import {MooLiteTab} from "src/MooLite/core/plugins/MooLiteTab";
import {SkillHrid} from "src/MooLite/core/skills/SkillHrid";
import XpTrackerDisplay from "src/MooLite/plugins/XpDetails/XpTrackerDisplay.vue";
import {PluginConfig} from "src/MooLite/core/plugins/config/PluginConfig";
import {PluginConfigType} from "src/MooLite/core/plugins/config/PluginConfigType";

export class XpTrackerPlugin extends MooLitePlugin {
    name: string = "Xp Tracker";
    description: string = "Tracks Xp gains over time";

    tab: MooLiteTab = {
        icon: "📊",
        pluginName: "Xp Tracker",
        componentName: "XpTrackerDisplay",
        component: markRaw(XpTrackerDisplay),
    }


    config: PluginConfig[] = [
        {
            key: "hide-empty",
            name: "Hide empty skills",
            description: "Hide skills in which you have not gained xp",
            value: false,
            type: PluginConfigType.CheckBox,
        }
    ];

    public get hideEmptySkills(): boolean {
        return this.getConfig("hide-empty")?.value ?? true;
    }

    updates: number = 0;
    gains: Record<SkillHrid, number> = {} as Record<SkillHrid, number>;

    initialize() {
        Object.values(SkillHrid).forEach(hrid => {
            this.gains[hrid] = 0;
        })
    }

    onXpGained(xpGained: XpGained) {
        this.gains[xpGained.skillHrid] += xpGained.delta;
        this.updates++;
    }
}
