import { Game } from "src/MooLite/core/Game";
import { ServerMessageType } from "./server/ServerMessageType";
import { ClientMessage } from "./client/ClientMessage";
import { ClientMessageType } from "./client/ClientMessageType";
import { ServerMessage } from "./server/ServerMessage";

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
