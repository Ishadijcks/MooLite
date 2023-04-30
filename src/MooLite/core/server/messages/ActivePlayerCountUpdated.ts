import { ServerMessage } from "src/MooLite/core/server/ServerMessage";
import { ServerMessageType } from "src/MooLite/core/server/ServerMessageType";
import { MessageParser } from "src/MooLite/core/server/MessageParser";
import { Game } from "src/MooLite/core/Game";

export interface ActivePlayerCountUpdatedMessage extends ServerMessage {
    type: ServerMessageType.ActivePlayerCountUpdated;
    activePlayerCount: number;
}

export class ActivePlayerCountUpdatedParser extends MessageParser {
    type = ServerMessageType.ActivePlayerCountUpdated;

    apply(message: ActivePlayerCountUpdatedMessage, game: Game): void {
        game.activePlayerCount = message.activePlayerCount;
    }
}
