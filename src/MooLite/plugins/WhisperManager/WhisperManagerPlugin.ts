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

export class WhisperManagerPlugin extends MooLitePlugin {
    name: string = "Whisper Manager";
    key = "whisper-manager";
    description: string = "A plugin to help manage all of your conversations!";

    _messages: ChatMessage[] = [];
    _conversations: Record<string, ConversationMessage[]> = {};

    public get messages(): ChatMessage[] {
        return this._messages;
    }

    public get conversations(): Record<string, ConversationMessage[]> {
        return this._conversations;
    }

    public get character(): Character {
        return this._game.character;
    }

    public populateDevConversations(): void {
        Object.entries(conversationData).forEach(([name, messages]) => (this._conversations[name] = messages));
    }

    public populateConversations(): void {
        for (const message of this._game.chatWhisperHistory) {
            this._addToConversations(message);
        }
    }

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

    onChatMessage(message: ChatMessage): void {
        if (message.channel === ChatChannelTypeHrid.Whisper) {
            this._addToConversations(message);
        } else {
            this._messages.push(message);
        }
    }

    _addToConversations(message: ChatMessage): void {
        const conversationMessage = message as ConversationMessage;
        const { senderName, receiverName } = conversationMessage;
        conversationMessage.isInbound = receiverName === this._game.character.name;
        const otherName = senderName === this._game.character.name ? receiverName : senderName;
        this._conversations[otherName] ||= [];
        this._conversations[otherName].unshift(conversationMessage);
    }
}
