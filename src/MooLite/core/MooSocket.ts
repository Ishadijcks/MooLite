import {SimpleEventDispatcher} from "strongly-typed-events";
import {ServerMessage} from "src/MooLite/core/server/ServerMessage";
import {InitClientInfoMessage} from "src/MooLite/core/server/messages/InitClientInfo";
import {ServerMessageType} from "src/MooLite/core/server/ServerMessageType";

export class MooSocket extends WebSocket {

    private _onServerMessage = new SimpleEventDispatcher<ServerMessage>();
    private _onInitClientInfoMessage = new SimpleEventDispatcher<InitClientInfoMessage>();

    public get onServerMessage() {
        return this._onServerMessage.asEvent();
    }

    public get onInitClientInfoMessage() {
        return this._onInitClientInfoMessage.asEvent();
    }

    constructor(url: string | URL, protocols: string | string[] | undefined) {
        super(url, protocols);
        this.addEventListener("message", (e: any) => {
            const msg = JSON.parse(e.data);

            if (msg.type === ServerMessageType.InitClientInfo) {
                console.log(msg);
                this._onInitClientInfoMessage.dispatch(msg);
            }

            this._onServerMessage.dispatch(msg);
        })
        window.mooSocket = this;
    }
}
