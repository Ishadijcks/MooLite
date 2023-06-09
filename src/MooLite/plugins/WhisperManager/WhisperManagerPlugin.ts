import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { MooLiteTab } from "src/MooLite/core/plugins/MooLiteTab";
import { markRaw } from "vue";
import WhisperManagerPluginDisplay from "src/MooLite/plugins/WhisperManager/WhisperManagerPluginDisplay.vue";
import { ChatMessage } from "src/MooLite/core/chat/ChatMessage";
import { ChatChannelTypeHrid } from "src/MooLite/core/chat/ChatChannelTypeHrid";
import { ConversationMessage } from "./ConversationMessage";
import { Game } from "src/MooLite/core/Game";
import { Conversation } from "src/MooLite/plugins/WhisperManager/Conversation";
import { PluginConfig } from "src/MooLite/core/plugins/config/PluginConfig";
import { PluginConfigType } from "src/MooLite/core/plugins/config/PluginConfigType";
import { PluginAuthorCredits } from "src/MooLite/core/plugins/PluginAuthorCredits";

export class WhisperManagerPlugin extends MooLitePlugin {
    name: string = "Whisper Manager";
    key = "whisper-manager";
    description: string = "A plugin to help manage all of your conversations!";

    credits: PluginAuthorCredits = {
        author: "LagunaE",
        maintainer: "LagunaE",
        contributors: ["JBQ", "knighterd", "Thessaloniki", "Houston", "Champ", "ML", "Maxion", "hoador"],
    };

    _conversations: Record<string, Conversation> = {};
    _activeConversationName: string = "";

    config: PluginConfig[] = [
        {
            type: PluginConfigType.CheckBox,
            name: "Hide System Messages",
            description: "Hide system messages from the conversation list",
            key: "hide-system-messages",
            value: false,
        },
        {
            type: PluginConfigType.CheckBox,
            name: "Hide Mod Messages",
            description: "Hide mod messages from the conversation list",
            key: "hide-mod-messages",
            value: false,
        },
    ];

    tab: MooLiteTab = {
        icon: "💬",
        pluginName: this.name,
        componentName: "WhisperManagerPluginDisplay",
        component: markRaw(WhisperManagerPluginDisplay),
        width: "w-80",
    };

    public get hideSystemMessages(): boolean {
        return this.getConfig("hide-system-messages").value;
    }

    public get hideModMessages(): boolean {
        return this.getConfig("hide-mod-messages").value;
    }

    public get activeConversation(): Conversation {
        return this._conversations[this._activeConversationName];
    }

    public get activeConversationName(): string {
        return this._activeConversationName;
    }

    public get conversations(): Record<string, Conversation> {
        let conversations: Record<string, Conversation> = this.hideSystemMessages
            ? (({ System, ...o }) => o)(this._conversations)
            : this._conversations;
        conversations = this.hideModMessages ? (({ Mods, ...o }) => o)(conversations) : conversations;

        return conversations;
    }

    public get game(): Game {
        return this._game;
    }

    public populateConversations(): void {
        if (Object.keys(this._conversations).length > 0) return;
        for (const message of this._game.chat.whisperHistory) {
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
        const isNonStandardMessage = channel === ChatChannelTypeHrid.Whisper || isModMessage || isSystemMessage;

        if (isNonStandardMessage) {
            this._addToConversations(message, true);
            return;
        }
    }

    _addToConversations(message: ChatMessage, markUnread?: boolean): void {
        const conversationMessage: ConversationMessage = {
            ...message,
            isInbound: message.receiverName === this._game.character.name,
        };
        const { senderName, receiverName, isModMessage, isSystemMessage } = conversationMessage;
        let otherName = senderName === this._game.character.name ? receiverName : senderName;
        otherName = isModMessage ? "Mods" : otherName;
        otherName = isSystemMessage ? "System" : otherName;
        this._conversations[otherName] ??= new Conversation([]);
        this._conversations[otherName].addMessage(conversationMessage);
        if (
            markUnread &&
            otherName !== this._activeConversationName &&
            senderName !== this._game.character.name &&
            !this._conversations[otherName].unread
        ) {
            this._conversations[otherName].toggleUnread();
        }
    }
}
