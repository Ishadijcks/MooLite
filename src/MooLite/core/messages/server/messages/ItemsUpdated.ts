import { MessageParser } from "../../MessageParser";
import { ServerMessage } from "../ServerMessage";
import { ServerMessageType } from "../ServerMessageType";
import { Game } from "src/MooLite/core/Game";
import { CharacterItem } from "src/MooLite/core/inventory/CharacterItem";

export interface ItemsUpdatedMessage extends ServerMessage {
    type: ServerMessageType.ItemsUpdated;

    endCharacterItems: CharacterItem[];
}

export class ItemsUpdatedParser extends MessageParser {
    type = ServerMessageType.ItemsUpdated;

    apply(message: ItemsUpdatedMessage, game: Game): void {
        game.inventory.updateCharacterItems(message.endCharacterItems);
    }
}
