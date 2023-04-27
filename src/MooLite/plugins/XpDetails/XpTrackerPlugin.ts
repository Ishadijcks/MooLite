import {MooLitePlugin} from "src/MooLite/plugins/MooLitePlugin";
import {XpGained} from "src/MooLite/core/skills/Skills";
import {MooLiteTab} from "src/MooLite/core/plugins/MooLiteTab";
import {SkillHrid} from "src/MooLite/core/skills/SkillHrid";
import XpTrackerDisplay from "src/MooLite/plugins/XpDetails/XpTrackerDisplay.vue";
import {markRaw} from "vue";

export class XpTrackerPlugin extends MooLitePlugin {
    name: string = "Xp Tracker";

    tab: MooLiteTab = {
        icon: "📊",
        pluginName: "Xp Tracker",
        componentName: "XpTrackerDisplay",
        component: markRaw(XpTrackerDisplay),
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
