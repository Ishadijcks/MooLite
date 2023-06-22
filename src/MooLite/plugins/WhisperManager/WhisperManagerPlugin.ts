import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { MooLiteTab } from "src/MooLite/core/plugins/MooLiteTab";
import { markRaw } from "vue";
import WhisperManagerPluginDisplay from "src/MooLite/plugins/WhisperManager/WhisperManagerPluginDisplay.vue";
import { ChatMessage } from "src/MooLite/core/chat/ChatMessage";
import { ChatChannelTypeHrid } from "src/MooLite/core/chat/ChatChannelTypeHrid";
import { ConversationMessage } from "./ConversationMessage";
import { Character } from "src/MooLite/core/character/Character";
import { conversationData } from "src/MooLite/plugins/WhisperManager/DevConstants";
import { Game } from "src/MooLite/core/Game";
import { Conversation } from "src/MooLite/plugins/WhisperManager/Conversation";

export class WhisperManagerPlugin extends MooLitePlugin {
    name: string = "Whisper Manager";
    key = "whisper-manager";
    description: string = "A plugin to help manage all of your conversations!";

    _messages: ChatMessage[] = [];
    _conversations: Record<string, Conversation> = {};
    _activeConversationName: string = "";

    tab: MooLiteTab = {
        icon: "💬",
        pluginName: this.name,
        componentName: "WhisperManagerPluginDisplay",
        component: markRaw(WhisperManagerPluginDisplay),
        width: "w-80",
    };

    initialize(game: Game): void {
        super.initialize(game);
        console.log("WhisperManagerPlugin initialized");
    }

    public get activeConversation(): Conversation {
        return this._conversations[this._activeConversationName];
    }

    public get activeConversationName(): string {
        return this._activeConversationName;
    }

    public get messages(): ChatMessage[] {
        return this._messages;
    }

    public get conversations(): Record<string, Conversation> {
        return this._conversations;
    }

    public get game(): Game {
        return this._game;
    }

    public populateDevConversations(): void {
        Object.entries(conversationData).forEach(([name, messages]) => {
            this._conversations[name] = new Conversation(messages);
        });
    }

    public populateConversations(): void {
        for (const message of this._game.chatWhisperHistory) {
            this._addToConversations(message);
        }
    }

    public setActiveConversation(name: string): void {
        if (!this._conversations[name]) return;
        this._activeConversationName = name;
        if (this._conversations[name].unread) {
            this._conversations[name].toggleUnread();
        }
    }

    onChatMessage(message: ChatMessage): void {
        const { channel, isModMessage, isSystemMessage } = message;
        const theseAreTheDroidsWereLookingFor =
            channel === ChatChannelTypeHrid.Whisper || isModMessage || isSystemMessage;

        if (theseAreTheDroidsWereLookingFor) {
            this._addToConversations(message, true);
            return;
        }

        this._messages.push(message);
    }

    _addToConversations(message: ChatMessage, markUnread?: boolean): void {
        const conversationMessage = message as ConversationMessage;
        const { senderName, receiverName, isModMessage, isSystemMessage } = conversationMessage;
        conversationMessage.isInbound = receiverName === this._game.character.name;
        let otherName = senderName === this._game.character.name ? receiverName : senderName;
        otherName = isModMessage ? "Mods" : otherName;
        otherName = isSystemMessage ? "System" : otherName;
        this._conversations[otherName] ??= new Conversation([]);
        this._conversations[otherName].addMessage(conversationMessage);
        if (markUnread && otherName !== this._activeConversationName && !this._conversations[otherName].unread) {
            this._conversations[otherName].toggleUnread();
        }
    }
}
