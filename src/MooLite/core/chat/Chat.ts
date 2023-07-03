import { ChatMessage } from "src/MooLite/core/chat/ChatMessage";
import { SimpleEventDispatcher } from "strongly-typed-events";
import { ChatChannelTypeHrid } from "src/MooLite/core/chat/ChatChannelTypeHrid";
import { ChatIconDetail } from "src/MooLite/core/chat/ChatIconDetail";
import { ChatIconHrid } from "src/MooLite/core/chat/ChatIconHrid";
import { CharacterChatIcon } from "src/MooLite/core/chat/CharacterChatIton";

export class Chat {
    private _messages: ChatMessage[] = [];
    private _whisperHistory: ChatMessage[] = [];
    private _characterChatIcons: Record<ChatIconHrid, CharacterChatIcon> = {};

    private _onMessage = new SimpleEventDispatcher<ChatMessage>();

    private _onGeneralMessage = new SimpleEventDispatcher<ChatMessage>();
    private _onTradeMessage = new SimpleEventDispatcher<ChatMessage>();
    private _onHelpMessage = new SimpleEventDispatcher<ChatMessage>();
    private _onWhisperMessage = new SimpleEventDispatcher<ChatMessage>();

    public readonly chatIconDetailMap: Record<ChatIconHrid, ChatIconDetail>;

    constructor(chatIconDetailMap: Record<ChatIconHrid, ChatIconDetail>) {
        this.chatIconDetailMap = chatIconDetailMap;
    }

    public updateCharacterChatIcons(chatIconMap: Record<ChatIconHrid, CharacterChatIcon>) {
        this._characterChatIcons = chatIconMap;
    }

    public updateWhisperHistory(chatWhisperHistory: ChatMessage[]) {
        this._whisperHistory = chatWhisperHistory;
    }

    public get whisperHistory() {
        return this._whisperHistory;
    }

    public get onMessage() {
        return this._onMessage.asEvent();
    }

    public get onGeneralMessage() {
        return this._onGeneralMessage.asEvent();
    }

    public get onTradeMessage() {
        return this._onTradeMessage.asEvent();
    }

    public get onHelpMessage() {
        return this._onHelpMessage.asEvent();
    }

    public get onWhisperMessage() {
        return this._onWhisperMessage.asEvent();
    }

    addMessage(chatMessage: ChatMessage): void {
        this._messages.push(chatMessage);

        this._onMessage.dispatch(chatMessage);

        switch (chatMessage.channel) {
            case ChatChannelTypeHrid.General:
                this._onGeneralMessage.dispatch(chatMessage);
                break;
            case ChatChannelTypeHrid.Trade:
                this._onTradeMessage.dispatch(chatMessage);
                break;
            case ChatChannelTypeHrid.Help:
                this._onHelpMessage.dispatch(chatMessage);
                break;
            case ChatChannelTypeHrid.Whisper:
                this._onWhisperMessage.dispatch(chatMessage);
                break;
        }
    }
}
