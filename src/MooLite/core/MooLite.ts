import { PluginManager } from "src/MooLite/core/plugins/PluginManager";
import { MooSocket } from "src/MooLite/core/MooSocket";
import { Game } from "src/MooLite/core/Game";
import { LocalStorage } from "src/MooLite/util/LocalStorage";
import { MooLiteSaveData } from "src/MooLite/core/MooLiteSaveData";
import { InitClientInfoParser } from "./messages/server/messages/InitClientInfo";
import { MessageParser } from "./messages/MessageParser";
import { ClientMessage } from "./messages/client/ClientMessage";
import { GetMarketItemOrderBooksParser } from "./messages/client/messages/GetMarketItemOrderBooks";
import { PingParser } from "./messages/client/messages/Ping";
import { ServerMessage } from "./messages/server/ServerMessage";
import { AbilitiesUpdatedParser } from "./messages/server/messages/AbilitiesUpdated";
import { ActionCompletedParser } from "./messages/server/messages/ActionCompleted";
import { ActionsUpdatedParser } from "./messages/server/messages/ActionsUpdated";
import { ActivePlayerCountUpdatedParser } from "./messages/server/messages/ActivePlayerCountUpdated";
import { CharacterStatsUpdatedParser } from "./messages/server/messages/CharacterStatsUpdated";
import { ChatMessageReceivedParser } from "./messages/server/messages/ChatMessageReceived";
import { CombatTriggersUpdatedParser } from "./messages/server/messages/CombatTriggersUpdated";
import { CombatUnitsInBattleUpdatedMessageParser } from "./messages/server/messages/CombatUnitsInBattleUpdated";
import { ConsumableSlotsUpdatedParser } from "./messages/server/messages/ConsumableSlotsUpdated";
import { EquipmentBuffsUpdatedParser } from "./messages/server/messages/EquipmentBuffsUpdated";
import { InfoParser } from "./messages/server/messages/Info";
import { InitCharacterInfoParser } from "./messages/server/messages/InitCharacterInfo";
import { ItemsUpdatedParser } from "./messages/server/messages/ItemsUpdated";
import { LeaderboardInfoUpdatedParser } from "./messages/server/messages/LeaderboardInfoUpdated";
import { LootOpenedParser } from "./messages/server/messages/LootOpened";
import { MarketItemorderBooksUpdated } from "./messages/server/messages/MarketItemOrderBooksUpdated";
import { NewBattleMessageParser } from "./messages/server/messages/NewBattle";
import { PongParser } from "./messages/server/messages/Pong";
export class MooLite {
    pluginManager: PluginManager;
    mooSocket: MooSocket;

    game: Game;

    messageParsers: MessageParser[] = [
        // Server messages
        new InitClientInfoParser(),
        new InitCharacterInfoParser(),
        new PongParser(),

        new ActionCompletedParser(),
        new ChatMessageReceivedParser(),
        new ActivePlayerCountUpdatedParser(),
        new ActionsUpdatedParser(),
        new ConsumableSlotsUpdatedParser(),
        new InfoParser(),
        new CombatTriggersUpdatedParser(),
        new NewBattleMessageParser(),
        new CombatUnitsInBattleUpdatedMessageParser(),
        new LeaderboardInfoUpdatedParser(),
        new LootOpenedParser(),
        new CharacterStatsUpdatedParser(),
        new EquipmentBuffsUpdatedParser(),
        new ItemsUpdatedParser(),
        new AbilitiesUpdatedParser(),
        new MarketItemorderBooksUpdated(),

        // Client messages
        new PingParser(),
        new GetMarketItemOrderBooksParser(),
    ];

    private _interval: NodeJS.Timeout;

    constructor(game: Game, pluginManager: PluginManager, mooSocket: MooSocket) {
        this.game = game;
        this.pluginManager = pluginManager;
        this.mooSocket = mooSocket;

        this.mooSocket.onServerMessage.subscribe((message) => this.parseMessage(message, false));
        this.mooSocket.onClientMessage.subscribe((message) => this.parseMessage(message, true));

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
            const data = plugin.save?.();

            saveData.plugins[plugin.key] = {
                isEnabled: plugin.isEnabled,
                config,
                data,
            };
        });
        LocalStorage.store(saveData);
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
            pluginData.config.forEach((configSaveData) => {
                const config = plugin.getConfig(configSaveData.key);
                if (config) {
                    config.value = configSaveData.value;
                }
            });

            if (pluginData.data) {
                try {
                    plugin.load?.(pluginData.data);
                } catch (e) {
                    console.warn(e);
                    console.warn(
                        `An error occurred while trying to load plugin ${plugin.key} with data ${JSON.stringify(
                            pluginData.data
                        )}`
                    );
                }
            }

            if (pluginData.isEnabled) {
                plugin.enable();
            }
            if (!pluginData.isEnabled && plugin.isEnabled) {
                plugin.disable();
            }
        });
    }

    private parseMessage(message: ServerMessage | ClientMessage, isClientMessage: boolean): void {
        const parser = this.messageParsers.find((parser) => {
            return parser.canParse(message);
        });

        if (!parser) {
            return isClientMessage
                ? console.debug(`Unhandled client message type: ${message.type}`, message)
                : console.warn(`Unhandled server message type: ${message.type}`, message);
        }

        parser.apply(message, this.game);
    }
}
