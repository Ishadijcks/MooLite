import { ServerMessage } from "src/MooLite/core/server/ServerMessage";
import { ServerMessageType } from "src/MooLite/core/server/ServerMessageType";
import { MessageParser } from "src/MooLite/core/server/MessageParser";
import { Game } from "src/MooLite/core/Game";
import { ActionHrid } from "src/MooLite/core/actions/ActionHrid";
import { DrinkDetail } from "src/MooLite/core/inventory/items/DrinkDetail";
import { FoodDetail } from "src/MooLite/core/inventory/items/FoodDetail";

export interface ConsumableSlotsUpdatedMessage extends ServerMessage {
    type: ServerMessageType.ConsumableSlotsUpdated;

    actionTypeDrinkSlotsMap: Record<ActionHrid, DrinkDetail[]>;
    actionTypeFoodSlotsMap: Record<ActionHrid, FoodDetail[]>;
}

export class ConsumableSlotsUpdatedParser extends MessageParser {
    type = ServerMessageType.ConsumableSlotsUpdated;

    apply(message: ConsumableSlotsUpdatedMessage, game: Game): void {
        game.inventory.updateCharacterDrink(message.actionTypeDrinkSlotsMap);
        game.inventory.updateCharacterFood(message.actionTypeFoodSlotsMap);
    }
}
