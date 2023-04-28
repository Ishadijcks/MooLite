import {SkillHrid} from "src/MooLite/core/skills/SkillHrid";

export class XpTrackerSkill {
    name: string;
    hrid: SkillHrid;
    xpGained: number = 0;
    xpPerHour: number = 0;
    averageAction: number = 0;

    private _startTime: Date = new Date();

    private _actionHistory: number[] = [];

    private readonly ACTION_MEMORY = 20;

    constructor(name: string, skill: SkillHrid) {
        this.name = name;
        this.hrid = skill;
    }

    private readonly MS_PER_HOUR = 1000 * 60 * 60;

    public getXpGain(xp: number) {
        if (this.xpGained === 0) {
            this._reset();
        }
        this._actionHistory.push(xp);
        if (this._actionHistory.length > this.ACTION_MEMORY) {
            this._actionHistory.shift();
        }
        this.averageAction = this._actionHistory.reduce((sum, xp) => sum + xp, 0) / this._actionHistory.length;
        this.xpGained += xp;

        this.updateXpPerHour();
    }

    public updateXpPerHour(): void {
        const now = new Date();
        const diff = now.getTime() - this._startTime.getTime();

        const hoursSpend = diff / this.MS_PER_HOUR;
        this.xpPerHour = this.xpGained / hoursSpend;
    }


    private _reset(): void {
        this._startTime = new Date();
    }
}
