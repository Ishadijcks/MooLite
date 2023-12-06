import { MessageParser } from "../../MessageParser";
import { ServerMessage } from "../ServerMessage";
import { ServerMessageType } from "../ServerMessageType";
import { Game } from "src/MooLite/core/Game";
import { CharacterAction } from "src/MooLite/core/actions/CharacterAction";

export interface ActionsUpdatedMessage extends ServerMessage {
    type: ServerMessageType.ActionsUpdated;
    endCharacterActions: CharacterAction[];
}

export class ActionsUpdatedParser extends MessageParser {
    type = ServerMessageType.ActionsUpdated;

    apply(message: ActionsUpdatedMessage, game: Game): void {
        game.actionQueue.updateActions(message.endCharacterActions);
    }
}
