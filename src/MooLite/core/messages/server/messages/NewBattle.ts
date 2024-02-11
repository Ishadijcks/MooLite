import { NoopMessageParser } from "../../NoopMessageParser";
import { ServerMessageType } from "../ServerMessageType";

export class NewBattleMessageParser extends NoopMessageParser {
    type = ServerMessageType.NewBattle;
}
