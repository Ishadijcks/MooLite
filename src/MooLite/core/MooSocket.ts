import { SimpleEventDispatcher } from "strongly-typed-events";
import { ServerMessage } from "src/MooLite/core/server/ServerMessage";
import { InitClientInfoMessage } from "src/MooLite/core/server/messages/InitClientInfo";
import { ServerMessageType } from "src/MooLite/core/server/ServerMessageType";
import { ClientMessage } from "src/MooLite/core/server/clientmessages/ClientMessage";
import { unsafeWindow } from "$";

export class MooSocket extends WebSocket {
    private _onServerMessage = new SimpleEventDispatcher<ServerMessage>();
    private _onClientMessage = new SimpleEventDispatcher<ClientMessage>();
    private _onInitClientInfoMessage = new SimpleEventDispatcher<InitClientInfoMessage>();

    public get onServerMessage() {
        return this._onServerMessage.asEvent();
    }

    public get onClientMessage() {
        return this._onClientMessage.asEvent();
    }

    public get onInitClientInfoMessage() {
        return this._onInitClientInfoMessage.asEvent();
    }

    constructor(url: string | URL, protocols: string | string[] | undefined) {
        super(url, protocols);

        // Only set the correct socket and skip the one Vite is using
        if (url.toString().includes("milkyway")) {
            unsafeWindow.mooSocket = this;
        }
    }

    public initialize(): void {
        this.addEventListener("message", (e: any) => {
            const msg = JSON.parse(e.data);

            if (msg.type === ServerMessageType.InitClientInfo) {
                this._onInitClientInfoMessage.dispatch(msg);
            }

            this._onServerMessage.dispatch(msg);
        });
    }

    send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void {
        this._onClientMessage.dispatch(JSON.parse(data as string));
        super.send(data);
    }
}
