import { ServerMessage } from "src/MooLite/core/server/ServerMessage";
import { ServerMessageType } from "src/MooLite/core/server/ServerMessageType";
import { MessageParser } from "src/MooLite/core/server/MessageParser";
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
