import {ServerMessageType} from "src/MooLite/core/server/ServerMessageType";
import {MessageParser} from "src/MooLite/core/server/MessageParser";
import {Game} from "src/MooLite/core/Game";
import {ServerMessage} from "src/MooLite/core/server/ServerMessage";
import {LeaderboardTopic} from "src/MooLite/core/leaderboard/LeaderboardTopic";

export interface LeaderboardInfoUpdatedMessage extends ServerMessage {
    type: ServerMessageType.LeaderboardInfoUpdated,

    leaderboardList: LeaderboardTopic[]
}

export class LeaderboardInfoUpdatedParser extends MessageParser {
    type = ServerMessageType.LeaderboardInfoUpdated;

    apply(message: LeaderboardInfoUpdatedMessage, game: Game): void {
        console.log(message);
        game.leaderboard.updateLeaderBoard(message.leaderboardList);
    }

}
