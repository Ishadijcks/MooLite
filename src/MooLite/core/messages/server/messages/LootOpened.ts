import { MessageParser } from "../../MessageParser";
import { ServerMessage } from "../ServerMessage";
import { ServerMessageType } from "../ServerMessageType";
import { Game } from "src/MooLite/core/Game";
import { CharacterItem } from "src/MooLite/core/inventory/CharacterItem";

export interface LootOpenedMessage extends ServerMessage {
    type: ServerMessageType.LootOpened;
    openedItem: CharacterItem;
    gainedItems: CharacterItem[];
}

export class LootOpenedParser extends MessageParser {
    type = ServerMessageType.LootOpened;

    apply(message: LootOpenedMessage, game: Game): void {
        game.lootBoxes.lootBoxOpened(message.openedItem, message.gainedItems);
    }
}
