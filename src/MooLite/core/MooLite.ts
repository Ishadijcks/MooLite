import {PluginManager} from "src/MooLite/core/plugins/PluginManager";
import {MooSocket} from "src/MooLite/core/MooSocket";
import {ServerMessage} from "src/MooLite/core/server/ServerMessage";
import {MessageParser} from "src/MooLite/core/server/MessageParser";
import {ActionCompletedParser} from "src/MooLite/core/server/messages/ActionCompleted";
import {Game} from "src/MooLite/core/Game";
import {ChatMessageReceivedParser} from "src/MooLite/core/server/messages/ChatMessageReceived";

export class MooLite {
    pluginManager: PluginManager;
    mooSocket: MooSocket;

    game: Game;

    messageParsers: MessageParser[] = [
        new ActionCompletedParser(),
        new ChatMessageReceivedParser(),
    ]


    constructor(mooSocket: MooSocket) {
        this.game = new Game();

        this.pluginManager = new PluginManager(this.game);
        this.mooSocket = mooSocket;

        this.mooSocket.onServerMessage.subscribe(message => this.parseServerMessage(message));

    }

    private parseServerMessage(message: ServerMessage): void {
        const parser = this.messageParsers.find(parser => {
            return parser.canParse(message);
        })
        console.log(message);
        if (!parser) {
            console.warn(`Unhandled message type ${message.type}`)
            return;
        }
        parser.apply(message, this.game);
    }
}
