import { ServerMessageType } from "src/MooLite/core/server/ServerMessageType";
import { MessageParser } from "src/MooLite/core/server/MessageParser";
import { Game } from "src/MooLite/core/Game";
import { ServerMessage } from "src/MooLite/core/server/ServerMessage";

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
