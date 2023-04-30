import { markRaw } from "vue";
import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { XpGained } from "src/MooLite/core/skills/Skills";
import { MooLiteTab } from "src/MooLite/core/plugins/MooLiteTab";
import { SkillHrid } from "src/MooLite/core/skills/SkillHrid";
import XpTrackerDisplay from "src/MooLite/plugins/XpDetails/XpTrackerDisplay.vue";
import { Game } from "src/MooLite/core/Game";
import { XpTrackerSkill } from "src/MooLite/plugins/XpDetails/XpTrackerSkill";

export class XpTrackerPlugin extends MooLitePlugin {
    name: string = "Xp Tracker";
    key = "xp-tracker";
    description: string = "Tracks Xp gains over time";
    _isEnabled: boolean = true;

    tab: MooLiteTab = {
        icon: "📊",
        pluginName: "Xp Tracker",
        componentName: "XpTrackerDisplay",
        component: markRaw(XpTrackerDisplay),
    };

    _gains: Record<SkillHrid, XpTrackerSkill> = {} as Record<SkillHrid, XpTrackerSkill>;

    public get gains(): XpTrackerSkill[] {
        return Object.values(this._gains).filter((skill) => {
            return skill.xpGained > 0;
        });
    }

    initialize(game: Game): void {
        super.initialize(game);
        this._game.skills.sortedSkills.forEach((detail) => {
            this._gains[detail.hrid] = new XpTrackerSkill(detail.name, detail.hrid);
        });
    }

    public getXpLeft(skill: SkillHrid): number {
        return this._game.skills.getXpLeft(skill);
    }

    getPercentage(skillHrid: SkillHrid) {
        return this._game.skills.getProgressPercentage(skillHrid);
    }

    onXpGained(xpGained: XpGained): void {
        this._gains[xpGained.skillHrid].getXpGain(xpGained.delta);
    }

    onClientTick(): void {
        this.gains.forEach((gain) => gain.updateXpPerHour());
    }

    getLevel(skillHrid: SkillHrid): number {
        return this._game.skills.getLevel(skillHrid);
    }
}
