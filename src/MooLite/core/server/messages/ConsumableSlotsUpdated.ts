import { ServerMessage } from "src/MooLite/core/server/ServerMessage";
import { ServerMessageType } from "src/MooLite/core/server/ServerMessageType";
import { MessageParser } from "src/MooLite/core/server/MessageParser";
import { Game } from "src/MooLite/core/Game";
import { ActionTypeHrid } from "src/MooLite/core/actions/ActionTypeHrid";
import { CharacterConsumable } from "src/MooLite/core/inventory/items/CharacterConsumable";

export interface ConsumableSlotsUpdatedMessage extends ServerMessage {
    type: ServerMessageType.ConsumableSlotsUpdated;

    actionTypeDrinkSlotsMap: Record<ActionTypeHrid, CharacterConsumable[]>;
    actionTypeFoodSlotsMap: Record<ActionTypeHrid, CharacterConsumable[]>;
}

export class ConsumableSlotsUpdatedParser extends MessageParser {
    type = ServerMessageType.ConsumableSlotsUpdated;

    apply(message: ConsumableSlotsUpdatedMessage, game: Game): void {
        game.inventory.updateCharacterDrinks(message.actionTypeDrinkSlotsMap);
        game.inventory.updateCharacterFood(message.actionTypeFoodSlotsMap);
    }
}
