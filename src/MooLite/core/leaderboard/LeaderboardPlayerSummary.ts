import {LeaderboardSkill} from "src/MooLite/core/leaderboard/LeaderboardSkill";

export interface LeaderboardPlayerSummary {
    name: string;
    skills: LeaderboardSkill[];
}
