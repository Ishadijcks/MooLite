import { NoopMessageParser } from "../../NoopMessageParser";
import { ServerMessageType } from "../ServerMessageType";

export class CombatUnitsInBattleUpdatedMessageParser extends NoopMessageParser {
    type = ServerMessageType.CombatUnitsInBattleUpdated;
}
