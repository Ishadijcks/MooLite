import {ServerMessage} from "src/MooLite/core/server/ServerMessage";
import {ServerMessageType} from "src/MooLite/core/server/ServerMessageType";

export interface ActivePlayerCountUpdated extends ServerMessage {
    type: ServerMessageType.ActivePlayerCountUpdated;
    activePlayerCount: number;
}
