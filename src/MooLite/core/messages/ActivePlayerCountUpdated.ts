import {ServerMessage} from "src/MooLite/core/messages/ServerMessage";
import {ServerMessageType} from "src/MooLite/core/messages/ServerMessageType";

export interface ActivePlayerCountUpdated extends ServerMessage {
    type: ServerMessageType.ActivePlayerCountUpdated;
    activePlayerCount: number;
}
