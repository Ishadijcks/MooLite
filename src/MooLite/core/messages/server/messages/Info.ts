import { MessageParser } from "../../MessageParser";
import { ServerMessage } from "../ServerMessage";
import { ServerMessageType } from "../ServerMessageType";
import { Game } from "src/MooLite/core/Game";

export interface InfoMessage extends ServerMessage {
    type: ServerMessageType.Info;
    message: string;
}

export class InfoParser extends MessageParser {
    type = ServerMessageType.Info;

    apply(message: InfoMessage, game: Game): void {
        game.notifier.processServerInfo(message);
    }
}
