import { PluginManager } from "src/MooLite/core/plugins/PluginManager";
import { MooSocket } from "src/MooLite/core/MooSocket";
import { ServerMessage } from "src/MooLite/core/server/ServerMessage";
import { MessageParser } from "src/MooLite/core/server/MessageParser";
import { ActionCompletedParser } from "src/MooLite/core/server/messages/ActionCompleted";
import { Game } from "src/MooLite/core/Game";
import { ChatMessageReceivedParser } from "src/MooLite/core/server/messages/ChatMessageReceived";
import { ActivePlayerCountUpdatedParser } from "src/MooLite/core/server/messages/ActivePlayerCountUpdated";
import { ConsumableSlotsUpdatedParser } from "src/MooLite/core/server/messages/ConsumableSlotsUpdated";
import { ActionsUpdatedParser } from "src/MooLite/core/server/messages/ActionsUpdated";
import { InitCharacterInfo } from "src/MooLite/core/server/messages/InitCharacterInfo";
import { InfoParser } from "src/MooLite/core/server/messages/Info";
import { LeaderboardInfoUpdatedParser } from "src/MooLite/core/server/messages/LeaderboardInfoUpdated";
import { PingParser } from "src/MooLite/core/server/clientmessages/Ping";
import { ClientMessage } from "src/MooLite/core/server/clientmessages/ClientMessage";
import { PongParser } from "src/MooLite/core/server/messages/Pong";
import { LocalStorage } from "src/MooLite/util/LocalStorage";
import { MooLiteSaveData } from "src/MooLite/core/MooLiteSaveData";

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
        new ConsumableSlotsUpdatedParser(),
        new InfoParser(),
        // new CombatTriggersUpdatedParser(),
        new LeaderboardInfoUpdatedParser(),

        // Client messages
        new PingParser(),
    ];

    private _interval: NodeJS.Timeout;

    constructor(game: Game, pluginManager: PluginManager, mooSocket: MooSocket) {
        this.game = game;
        this.pluginManager = pluginManager;
        this.mooSocket = mooSocket;

        this.mooSocket.onServerMessage.subscribe((message) => this.parseMessage(message));
        this.mooSocket.onClientMessage.subscribe((message) => this.parseMessage(message));

        this._interval = setInterval(() => {
            this._clientTick(1);
        }, 1000);

        this._load();
    }

    private _timeSinceLastSave: number = 0;
    private readonly SAVE_INTERVAL = 5;

    private _clientTick(delta: number): void {
        this._timeSinceLastSave += delta;

        if (this._timeSinceLastSave > this.SAVE_INTERVAL) {
            this._save();
            this._timeSinceLastSave = 0;
        }

        this.pluginManager.clientTick();
    }

    private _save(): void {
        const saveData: MooLiteSaveData = {
            plugins: {},
        };

        this.pluginManager.plugins.forEach((plugin) => {
            const config = plugin.config.map((config) => {
                return {
                    key: config.key,
                    value: config.value,
                };
            });
            saveData.plugins[plugin.key] = {
                isEnabled: plugin.isEnabled,
                config,
            };
        });
        LocalStorage.store(saveData);
        console.log("Game saved");
    }

    private _load(): void {
        const saveData: MooLiteSaveData = LocalStorage.get();

        if (!saveData) {
            alert(
                "Thank you for using MooLite.\n" +
                    "MooLite is community-made client, unrelated to the development of Milky Way Idle\n" +
                    "Please report any issues with MooLite over at \n" +
                    "https://github.com/Ishadijcks/MooLite\n" +
                    "and do not bother the Milky Way Idle developers about it on Discord.\n"
            );
            return;
        }

        Object.keys(saveData.plugins).forEach((pluginKey) => {
            const pluginData = saveData.plugins[pluginKey];
            const plugin = this.pluginManager.plugins.find((plugin) => plugin.key === pluginKey);
            if (!plugin) {
                return;
            }
            if (pluginData.isEnabled && !plugin.isEnabled) {
                plugin.enable();
            }
            if (!pluginData.isEnabled && plugin.isEnabled) {
                plugin.disable();
            }
            pluginData.config.forEach((configSaveData) => {
                const config = plugin.getConfig(configSaveData.key);
                if (config) {
                    config.value = configSaveData.value;
                }
            });
        });
    }

    private parseMessage(message: ServerMessage | ClientMessage): void {
        const parser = this.messageParsers.find((parser) => {
            return parser.canParse(message);
        });
        // console.log(message);
        if (!parser) {
            console.warn(`Unhandled message type ${message.type}`);
            console.log(message);
            return;
        }
        parser.apply(message, this.game);
    }
}
