import { LeaderboardTopic } from "src/MooLite/core/leaderboard/LeaderboardTopic";
import { LeaderboardPlayerSummary } from "src/MooLite/core/leaderboard/LeaderboardPlayerSummary";
import { LeaderboardSkill } from "src/MooLite/core/leaderboard/LeaderboardSkill";
import { SimpleEventDispatcher } from "strongly-typed-events";

export class Leaderboard {
    public leaderboardList: LeaderboardTopic[] = [];
    public lastUpdated: Date | null = null;

    private _onLeaderboardUpdated = new SimpleEventDispatcher<LeaderboardTopic[]>();
    public get onLeaderboardUpdated() {
        return this._onLeaderboardUpdated.asEvent();
    }

    updateLeaderBoard(list: LeaderboardTopic[]): void {
        this.leaderboardList = list;
        this.lastUpdated = new Date();

        this._onLeaderboardUpdated.dispatch(this.leaderboardList);
    }

    getPlayerSummary(name: string): LeaderboardPlayerSummary | null {
        if (this.leaderboardList.length === 0) {
            return null;
        }

        const skills: LeaderboardSkill[] = this.leaderboardList.flatMap((value) => {
            const playerEntry = value.data.find((entry) => entry.name.toLowerCase() === name.toLowerCase());
            if (!playerEntry) {
                return [];
            }
            return [
                {
                    name: value.title,
                    level: playerEntry.level,
                    rank: value.data.indexOf(playerEntry) + 1,
                    experience: playerEntry.experience,
                },
            ];
        });
        if (skills.length === 0) {
            return null;
        }
        return {
            name,
            skills: skills,
        };
    }
}
