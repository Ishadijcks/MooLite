import { MessageParser } from "../../MessageParser";
import { ServerMessage } from "../ServerMessage";
import { ServerMessageType } from "../ServerMessageType";
import { Game } from "src/MooLite/core/Game";
import { LeaderboardTopic } from "src/MooLite/core/leaderboard/LeaderboardTopic";

export interface LeaderboardInfoUpdatedMessage extends ServerMessage {
    type: ServerMessageType.LeaderboardInfoUpdated;

    leaderboardList: LeaderboardTopic[];
}

export class LeaderboardInfoUpdatedParser extends MessageParser {
    type = ServerMessageType.LeaderboardInfoUpdated;

    apply(message: LeaderboardInfoUpdatedMessage, game: Game): void {
        game.leaderboard.updateLeaderBoard(message.leaderboardList);
    }
}
