import {ClientMessage} from "src/MooLite/core/server/clientmessages/ClientMessage";
import {ClientMessageType} from "src/MooLite/core/server/clientmessages/ClientMessageType";
import {MessageParser} from "src/MooLite/core/server/MessageParser";
import {Game} from "src/MooLite/core/Game";

export interface PingMessage extends ClientMessage {
    type: ClientMessageType.Ping

}

export class PingParser extends MessageParser {
    type = ClientMessageType.Ping;

    apply(message: PingMessage, game: Game): void {
        game.lastPing = new Date();
    }
}
