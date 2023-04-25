import {SimpleEventDispatcher} from "strongly-typed-events";
import {ChatMessageReceived} from "src/MooLite/core/messages/ChatMessageReceived";
import {ChatMessage} from "src/MooLite/core/chat/ChatMessage";
import {ServerMessageType} from "src/MooLite/core/messages/ServerMessageType";
import {ServerMessage} from "src/MooLite/core/messages/ServerMessage";

export class MooSocket extends WebSocket {

    private _onChatMessageReceived = new SimpleEventDispatcher<ChatMessage>();

    public get onChatMessage() {
        return this._onChatMessageReceived.asEvent();
    }

    constructor(url: string | URL, protocols: string | string[] | undefined) {
        super(url, protocols);
        this.addEventListener("message", (e: any) => {
            this.parseMessage(JSON.parse(e.data));
        })
        window.mooSocket = this;
    }

    private parseMessage(msg: ServerMessage) {
        switch (msg.type) {
            case ServerMessageType.InitClientInfo:
                break;
            case ServerMessageType.InitCharacterInfo:
                break;
            case ServerMessageType.ActivePlayerCountUpdated:
                break;
            case ServerMessageType.ChatMessageReceived:
                this._onChatMessageReceived.dispatch({
                    message: (msg as ChatMessageReceived).message.message,
                    channel: (msg as ChatMessageReceived).message.channelTypeHrid,
                    senderName: (msg as ChatMessageReceived).message.senderName,
                });
                return;
            default:
                console.warn(`Unhandled message type ${msg.type}`, msg)
        }
    }

}
