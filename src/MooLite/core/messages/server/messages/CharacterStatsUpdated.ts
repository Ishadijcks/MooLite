import { MessageParser } from "../../MessageParser";
import { ServerMessage } from "../ServerMessage";
import { ServerMessageType } from "../ServerMessageType";
import { Game } from "src/MooLite/core/Game";
import { NonCombatStats } from "src/MooLite/core/equipment/NonCombatStats";
import { CombatUnit } from "src/MooLite/core/combat/CombatUnit";

export interface CharacterStatsUpdatedMessage extends ServerMessage {
    type: ServerMessageType.CharacterStatsUpdated;

    combatUnit: CombatUnit;
    nonCombatStats: NonCombatStats;
}

export class CharacterStatsUpdatedParser extends MessageParser {
    type = ServerMessageType.CharacterStatsUpdated;

    apply(message: CharacterStatsUpdatedMessage, game: Game): void {
        game.combat.updateCombatUnit(message.combatUnit);
        game.equipment.updateNonCombatStats(message.nonCombatStats);
    }
}
