import {SkillHrid} from "src/MooLite/core/skills/SkillHrid";
import {CharacterSkill} from "src/MooLite/core/skills/CharacterSkill";
import {SimpleEventDispatcher} from "strongly-typed-events";
import {SkillDetail} from "src/MooLite/core/skills/SkillDetail";

export interface XpGained extends CharacterSkill {
    delta: number;
}

export interface LvlGained extends CharacterSkill {
    delta: number;
}

export class Skills {
    private readonly _characterSkills: Record<SkillHrid, CharacterSkill>;


    private _onXpGained = new SimpleEventDispatcher<XpGained>();
    private _onLvlGained = new SimpleEventDispatcher<LvlGained>();

    public readonly skillDetailMap: Record<SkillHrid, SkillDetail>;
    public readonly sortedSkills: SkillDetail[];
    public readonly levelExperienceTable: number[];

    public get onXpGained() {
        return this._onXpGained.asEvent();
    }

    public get onLvlGained() {
        return this._onLvlGained.asEvent();
    }


    constructor(skillDetailMap: Record<SkillHrid, SkillDetail>, levelExperienceTable: number[]) {
        this.skillDetailMap = skillDetailMap;
        this.levelExperienceTable = levelExperienceTable;

        this.sortedSkills = Object.values(this.skillDetailMap).sort((a, b) => {
            return a.sortIndex - b.sortIndex;
        })

        this._characterSkills = {} as Record<SkillHrid, CharacterSkill>;
        this.sortedSkills.forEach(detail => {
            this._characterSkills[detail.hrid] = {
                skillHrid: detail.hrid,
                experience: 0,
                level: 0,
            }
        })
    }

    public updateSkills(skills: CharacterSkill[], notify: boolean = true): void {
        skills.forEach(info => {
            const xpChanged = info.experience - this._characterSkills[info.skillHrid].experience;
            const lvlChanged = info.level - this._characterSkills[info.skillHrid].level;
            this._characterSkills[info.skillHrid] = info;

            if (!notify) {
                return;
            }
            if (xpChanged !== 0) {
                this._onXpGained.dispatch({
                    ...this._characterSkills[info.skillHrid],
                    delta: xpChanged,
                });
            }
            if (lvlChanged !== 0) {
                this._onLvlGained.dispatch({
                    ...this._characterSkills[info.skillHrid],
                    delta: lvlChanged,
                });
            }

        })
    }

    public getXpLeft(skill: SkillHrid): number {
        const currentLevel = this._characterSkills[skill].level;
        const targetXp = this.levelExperienceTable[currentLevel + 1];
        return targetXp - this._characterSkills[skill].experience;
    }
}
