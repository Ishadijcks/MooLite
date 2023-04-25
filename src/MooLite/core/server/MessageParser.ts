import {ServerMessageType} from "src/MooLite/core/server/ServerMessageType";
import {ServerMessage} from "src/MooLite/core/server/ServerMessage";
import {Game} from "src/MooLite/core/Game";

export abstract class MessageParser {
    abstract type: ServerMessageType;

    canParse(message: ServerMessage): boolean {
        return message.type === this.type;
    }

    /**
     * Update the state of our game with the content of this message
     */
    abstract apply(message: ServerMessage, game: Game): void;
}
