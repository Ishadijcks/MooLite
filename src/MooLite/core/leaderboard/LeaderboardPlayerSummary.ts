import { LeaderboardSkill } from "src/MooLite/core/leaderboard/LeaderboardSkill";
import { LeaderboardTaskPoints } from "src/MooLite/core/leaderboard/LeaderboardTaskPoints";

export interface LeaderboardPlayerSummary {
    name: string;
    skills: LeaderboardSkill[];
    taskPoints?: LeaderboardTaskPoints;
}
