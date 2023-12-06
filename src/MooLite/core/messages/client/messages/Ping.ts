import { Game } from "src/MooLite/core/Game";
import { ClientMessageType } from "../ClientMessageType";
import { MessageParser } from "../../MessageParser";
import { ClientMessage } from "../ClientMessage";

export interface PingMessage extends ClientMessage {
    type: ClientMessageType.Ping;
}

export class PingParser extends MessageParser {
    type = ClientMessageType.Ping;

    apply(message: PingMessage, game: Game): void {
        game.lastPing = new Date();
    }
}
