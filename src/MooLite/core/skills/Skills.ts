import {SkillHrid} from "src/MooLite/core/skills/SkillHrid";
import {SkillInfo} from "src/MooLite/core/skills/SkillInfo";
import {SimpleEventDispatcher} from "strongly-typed-events";

export class Skills {
    private readonly _skills: Record<SkillHrid, SkillInfo>;

    private _onXpGained = new SimpleEventDispatcher<SkillInfo>();
    private _onLvlGained = new SimpleEventDispatcher<SkillInfo>();

    public get onXpGained() {
        return this._onXpGained.asEvent();
    }
    public get onLvlGained() {
        return this._onLvlGained.asEvent();
    }


    constructor() {
        this._skills = {} as Record<SkillHrid, SkillInfo>;
        Object.values(SkillHrid).forEach(hrid => {
            this._skills[hrid] = {
                skillHrid: hrid,
                experience: 0,
                level: 0,
            }
        })
    }

    public updateSkill(info: SkillInfo): void {
        const xpChanged = this._skills[info.skillHrid].experience !== info.experience;

        const lvlChanged = this._skills[info.skillHrid].level !== info.level;

        this._skills[info.skillHrid] = info;
        if (xpChanged) {
            this._onXpGained.dispatch(this._skills[info.skillHrid]);
        }
        if (lvlChanged) {
            this._onLvlGained.dispatch(this._skills[info.skillHrid]);
        }
    }
}
