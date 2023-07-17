import { LeaderboardData } from "src/MooLite/core/leaderboard/LeaderboardData";

export interface LeaderboardTopic {
    title: string;
    columnNames: string[];
    data: LeaderboardData[];
}
