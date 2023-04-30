import { ServerMessageType } from "src/MooLite/core/server/ServerMessageType";
import { ServerMessage } from "src/MooLite/core/server/ServerMessage";
import { Game } from "src/MooLite/core/Game";
import { ClientMessageType } from "src/MooLite/core/server/clientmessages/ClientMessageType";
import { ClientMessage } from "src/MooLite/core/server/clientmessages/ClientMessage";

export abstract class MessageParser {
    abstract type: ServerMessageType | ClientMessageType;

    canParse(message: ServerMessage | ClientMessage): boolean {
        return message.type === this.type;
    }

    /**
     * Update the state of our game with the content of this message
     */
    abstract apply(message: ServerMessage | ClientMessage, game: Game): void;
}
