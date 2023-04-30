import { MessageParser } from "src/MooLite/core/server/MessageParser";
import { Game } from "src/MooLite/core/Game";
import { ServerMessage } from "src/MooLite/core/server/ServerMessage";
import { ServerMessageType } from "src/MooLite/core/server/ServerMessageType";

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
