import {LeaderboardTopic} from "src/MooLite/core/leaderboard/LeaderboardTopic";
import {LeaderboardPlayerSummary} from "src/MooLite/core/leaderboard/LeaderboardPlayerSummary";
import {LeaderboardSkill} from "src/MooLite/core/leaderboard/LeaderboardSkill";

export class Leaderboard {
    public leaderboardList: LeaderboardTopic[] = [];
    public lastUpdated: Date | null = null;


    updateLeaderBoard(list: LeaderboardTopic[]): void {
        this.leaderboardList = list;
        this.lastUpdated = new Date();
        console.error("Leaderboard updated")
    }

    getPlayerSummary(name: string): LeaderboardPlayerSummary | null {
        if (this.leaderboardList.length === 0) {
            return null;
        }

        const skills: LeaderboardSkill[] = this.leaderboardList.flatMap(value => {
            const playerEntry = value.data.find(entry => entry.name.toLowerCase() === name.toLowerCase());
            if (!playerEntry) {
                return [];
            }
            return [{
                name: value.title,
                level: playerEntry.level,
                rank: value.data.indexOf(playerEntry) + 1,
                experience: playerEntry.experience
            }]
        })
        if (skills.length === 0) {
            return null;
        }
        return {
            name,
            skills: skills,
        };
    }
}
