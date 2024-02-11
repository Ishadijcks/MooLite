import { NoopMessageParser } from "../../NoopMessageParser";
import { ServerMessageType } from "../ServerMessageType";

export class MarketItemorderBooksUpdated extends NoopMessageParser {
    type = ServerMessageType.MarketItemorderBooksUpdated;
}
