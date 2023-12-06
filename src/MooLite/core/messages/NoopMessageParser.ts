import { MessageParser } from "./MessageParser";
import { ServerMessage } from "./server/ServerMessage";

export abstract class NoopMessageParser extends MessageParser {
    apply(message: ServerMessage): void {
        console.debug(`Parsing ${this.type} message`, message);
    }
}
