import { NoopMessageParser } from "../../NoopMessageParser";
import { ServerMessageType } from "../ServerMessageType";

export class CommunityBuffsUpdatedMessageParser extends NoopMessageParser {
    type = ServerMessageType.CommunityBuffsUpdated;
}
