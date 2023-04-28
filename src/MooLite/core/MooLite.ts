import {PluginManager} from "src/MooLite/core/plugins/PluginManager";
import {MooSocket} from "src/MooLite/core/MooSocket";
import {ServerMessage} from "src/MooLite/core/server/ServerMessage";
import {MessageParser} from "src/MooLite/core/server/MessageParser";
import {ActionCompletedParser} from "src/MooLite/core/server/messages/ActionCompleted";
import {Game} from "src/MooLite/core/Game";
import {ChatMessageReceivedParser} from "src/MooLite/core/server/messages/ChatMessageReceived";
import {ActivePlayerCountUpdatedParser} from "src/MooLite/core/server/messages/ActivePlayerCountUpdated";
import {ActionsUpdatedParser} from "src/MooLite/core/server/messages/ActionsUpdated";
import {InitCharacterInfo} from "src/MooLite/core/server/messages/InitCharacterInfo";
import {InfoParser} from "src/MooLite/core/server/messages/Info";
import {LeaderboardInfoUpdatedParser} from "src/MooLite/core/server/messages/LeaderboardInfoUpdated";
import {PingParser} from "src/MooLite/core/server/clientmessages/Ping";
import {ClientMessage} from "src/MooLite/core/server/clientmessages/ClientMessage";
import {PongParser} from "src/MooLite/core/server/messages/Pong";

export class MooLite {
    pluginManager: PluginManager;
    mooSocket: MooSocket;

    game: Game;

    messageParsers: MessageParser[] = [
        // Server messages
        new InitCharacterInfo(),
        new PongParser(),

        new ActionCompletedParser(),
        new ChatMessageReceivedParser(),
        new ActivePlayerCountUpdatedParser(),
        new ActionsUpdatedParser(),
        new InfoParser(),
        // new CombatTriggersUpdatedParser(),
        new LeaderboardInfoUpdatedParser(),

        // Client messages
        new PingParser(),
    ]


    constructor(game: Game, pluginManager: PluginManager, mooSocket: MooSocket) {
        this.game = game;
        this.pluginManager = pluginManager;
        this.mooSocket = mooSocket;

        this.mooSocket.onServerMessage.subscribe(message => this.parseMessage(message));
        this.mooSocket.onClientMessage.subscribe(message => this.parseMessage(message));
    }

    private parseMessage(message: ServerMessage | ClientMessage): void {
        const parser = this.messageParsers.find(parser => {
            return parser.canParse(message);
        })
        // console.log(message);
        if (!parser) {
            console.warn(`Unhandled message type ${message.type}`)
            console.log(message);
            return;
        }
        parser.apply(message, this.game);
    }
}
