import { Game } from "src/MooLite/core/Game";
import { MessageParser } from "../../MessageParser";
import { ServerMessage } from "../ServerMessage";
import { ServerMessageType } from "../ServerMessageType";

export interface PongMessage extends ServerMessage {
    type: ServerMessageType.Pong;
    serverTimestamp: string;
}

export class PongParser extends MessageParser {
    type = ServerMessageType.Pong;

    apply(message: PongMessage, game: Game): void {
        game.lastPong = new Date(Date.parse(message.serverTimestamp));
    }
}
