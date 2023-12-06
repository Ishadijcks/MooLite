import { LeaderboardTopic } from "src/MooLite/core/leaderboard/LeaderboardTopic";
import { LeaderboardPlayerSummary } from "src/MooLite/core/leaderboard/LeaderboardPlayerSummary";
import { LeaderboardSkill } from "src/MooLite/core/leaderboard/LeaderboardSkill";
import { SimpleEventDispatcher } from "strongly-typed-events";
import { LeaderboardTaskPoints } from "src/MooLite/core/leaderboard/LeaderboardTaskPoints";

export class Leaderboard {
    public leaderboardList: LeaderboardTopic[] = [];
    public lastUpdated: Date | null = null;

    private _onLeaderboardUpdated = new SimpleEventDispatcher<LeaderboardTopic[]>();

    public getSkillLeaderboards(): LeaderboardTopic[] {
        return this.leaderboardList.filter((leaderboard) => leaderboard.columnNames.includes("Experience"));
    }

    public getTaskLeaderboard(): LeaderboardTopic {
        return this.leaderboardList.find((leaderboard) =>
            leaderboard.columnNames.includes("Task Points")
        ) as LeaderboardTopic;
    }

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

        const skills: LeaderboardSkill[] = this.getSkillLeaderboards().flatMap((value) => {
            const playerEntry = value.data.find((entry) => entry.name.toLowerCase() === name.toLowerCase());
            if (!playerEntry) {
                return [];
            }
            return [
                {
                    name: value.title,
                    level: playerEntry.value1,
                    rank: value.data.indexOf(playerEntry) + 1,
                    experience: playerEntry.value2,
                },
            ];
        });

        // TODO(@Isha): Adding this additionally is quite the ugly hack.
        //  It should be refactored into a proper categorized system if another leaderboard category is introduced
        const taskLeaderboard = this.getTaskLeaderboard();
        const playerEntry = taskLeaderboard.data.find((entry) => entry.name.toLowerCase() === name.toLowerCase());

        const tasks: LeaderboardTaskPoints | undefined = playerEntry && {
            name: taskLeaderboard.title,
            taskPoints: playerEntry.value1,
            rank: taskLeaderboard.data.indexOf(playerEntry) + 1,
        };

        return {
            name,
            skills: skills,
            taskPoints: tasks,
        };
    }
}
