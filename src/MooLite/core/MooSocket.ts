import {SimpleEventDispatcher} from "strongly-typed-events";
import {ServerMessage} from "src/MooLite/core/server/ServerMessage";

export class MooSocket extends WebSocket {

    private _onServerMessage = new SimpleEventDispatcher<ServerMessage>();

    public get onServerMessage() {
        return this._onServerMessage.asEvent();
    }

    constructor(url: string | URL, protocols: string | string[] | undefined) {
        super(url, protocols);
        this.addEventListener("message", (e: any) => {
            const msg = JSON.parse(e.data);
            this._onServerMessage.dispatch(msg);
        })
        window.mooSocket = this;
    }
}
