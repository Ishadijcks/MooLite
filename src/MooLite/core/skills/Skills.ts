import {SkillHrid} from "src/MooLite/core/skills/SkillHrid";
import {CharacterSkill} from "src/MooLite/core/skills/CharacterSkill";
import {SimpleEventDispatcher} from "strongly-typed-events";

export interface XpGained extends CharacterSkill {
    delta: number;
}

export interface LvlGained extends CharacterSkill {
    delta: number;
}

export class Skills {
    private readonly _skills: Record<SkillHrid, CharacterSkill>;


    private _onXpGained = new SimpleEventDispatcher<XpGained>();
    private _onLvlGained = new SimpleEventDispatcher<LvlGained>();

    public get onXpGained() {
        return this._onXpGained.asEvent();
    }

    public get onLvlGained() {
        return this._onLvlGained.asEvent();
    }


    constructor() {
        this._skills = {} as Record<SkillHrid, CharacterSkill>;
        Object.values(SkillHrid).forEach(hrid => {
            this._skills[hrid] = {
                skillHrid: hrid,
                experience: 0,
                level: 0,
            }
        })
    }

    public updateSkills(skills: CharacterSkill[], notify: boolean = true): void {
        skills.forEach(info => {
            const xpChanged = info.experience - this._skills[info.skillHrid].experience;
            const lvlChanged = info.level - this._skills[info.skillHrid].level;
            this._skills[info.skillHrid] = info;

            if (!notify) {
                return;
            }
            if (xpChanged !== 0) {
                this._onXpGained.dispatch({
                    ...this._skills[info.skillHrid],
                    delta: xpChanged,
                });
            }
            if (lvlChanged !== 0) {
                this._onLvlGained.dispatch({
                    ...this._skills[info.skillHrid],
                    delta: lvlChanged,
                });
            }

        })
    }
}
