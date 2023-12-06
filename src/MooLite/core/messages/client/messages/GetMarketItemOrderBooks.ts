import { Game } from "src/MooLite/core/Game";
import { ClientMessageType } from "../ClientMessageType";
import { ClientMessage } from "../ClientMessage";
import { MessageParser } from "../../MessageParser";

export interface GetMarketItemOrderBooksMessage extends ClientMessage {
    type: ClientMessageType.GetMarketItemOrderBooks;
}

export class GetMarketItemOrderBooksParser extends MessageParser {
    type = ClientMessageType.GetMarketItemOrderBooks;

    apply(message: GetMarketItemOrderBooksMessage, game: Game): void {
        console.debug(this.type, { message });
    }
}
