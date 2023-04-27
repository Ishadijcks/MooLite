import {ServerMessage} from "src/MooLite/core/server/ServerMessage";
import {ServerMessageType} from "src/MooLite/core/server/ServerMessageType";
import {MessageParser} from "src/MooLite/core/server/MessageParser";
import {Game} from "src/MooLite/core/Game";
import {AbilityHrid} from "src/MooLite/core/abilities/AbilityHrid";
import {CombatTrigger} from "src/MooLite/core/combat/triggers/CombatTrigger";
import {ItemHrid} from "src/MooLite/core/inventory/ItemHrid";
import {CombatTriggerTypeHrid} from "src/MooLite/core/combat/triggers/CombatTriggerTypeHrid";

export interface CombatTriggersUpdatedMessage extends ServerMessage {
    type: ServerMessageType.CombatTriggersUpdated

    abilityHrid: AbilityHrid;
    combatTriggerTypeHrid: CombatTriggerTypeHrid;
    combatTriggers: CombatTrigger[];
    itemHrid: ItemHrid;
}

export class CombatTriggersUpdatedParser extends MessageParser {
    type = ServerMessageType.CombatTriggersUpdated;

    apply(message: CombatTriggersUpdatedMessage, game: Game): void {
        // TODO(@Isha): Figure out what to do with combat triggers
        // game.abilities.updateCombatTriggers(message.)
        console.log(message);
    }

}
