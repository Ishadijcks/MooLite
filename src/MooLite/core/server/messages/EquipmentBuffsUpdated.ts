import { ServerMessageType } from "src/MooLite/core/server/ServerMessageType";
import { ServerMessage } from "src/MooLite/core/server/ServerMessage";
import { MessageParser } from "src/MooLite/core/server/MessageParser";
import { Game } from "src/MooLite/core/Game";
import { ActionTypeHrid } from "src/MooLite/core/actions/ActionTypeHrid";
import { EquipmentActionTypeBuff } from "src/MooLite/core/equipment/EquipmentActionTypeBuff";

export interface EquipmentBuffsUpdatedMessage extends ServerMessage {
    type: ServerMessageType.EquipmentBuffsUpdated;

    equipmentActionTypeBuffsMap: Record<ActionTypeHrid, EquipmentActionTypeBuff>;
}

export class EquipmentBuffsUpdatedParser extends MessageParser {
    type = ServerMessageType.EquipmentBuffsUpdated;

    apply(message: EquipmentBuffsUpdatedMessage, game: Game): void {
        game.equipment.updateEquipmentActionTypeBuffs(message.equipmentActionTypeBuffsMap);
    }
}
