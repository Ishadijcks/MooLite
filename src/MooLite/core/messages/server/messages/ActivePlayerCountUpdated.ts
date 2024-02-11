import { Game } from "src/MooLite/core/Game";
import { MessageParser } from "../../MessageParser";
import { ServerMessage } from "../ServerMessage";
import { ServerMessageType } from "../ServerMessageType";

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
