import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { MooLiteTab } from "src/MooLite/core/plugins/MooLiteTab";
import { markRaw } from "vue";
import WhisperManagerPluginDisplay from "src/MooLite/plugins/WhisperManager/WhisperManagerPluginDisplay.vue";
import { ChatMessage } from "src/MooLite/core/chat/ChatMessage";
import { ChatChannelTypeHrid } from "src/MooLite/core/chat/ChatChannelTypeHrid";

export class WhisperManagerPlugin extends MooLitePlugin {
    name: string = "Whisper Manager";
    key = "whisper-manager";
    description: string = "A plugin to help manage all of your conversations!";

    _messages: ChatMessage[] = [];
    _conversations: Record<string, ChatMessage[]> = {};

    public get messages(): ChatMessage[] {
        return this._messages;
    }

    public get conversations(): Record<string, ChatMessage[]> {
        return this._conversations;
    }

    public populateConversations(): void {
        this._conversations = {
            Zeplin: [
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Hey, how's it going?",
                },
                {
                    senderName: "Zeplin",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
                {
                    senderName: "Zeplin",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
                {
                    senderName: "Zeplin",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
                {
                    senderName: "Zeplin",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
                {
                    senderName: "Zeplin",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
                {
                    senderName: "Zeplin",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
                {
                    senderName: "Zeplin",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
                {
                    senderName: "Zeplin",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
                {
                    senderName: "Zeplin",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
                {
                    senderName: "Zeplin",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
                {
                    senderName: "Zeplin",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
                {
                    senderName: "Zeplin",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
                {
                    senderName: "Zeplin",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
                {
                    senderName: "Zeplin",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
                {
                    senderName: "Zeplin",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
                {
                    senderName: "Zeplin",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
                {
                    senderName: "Zeplin",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
                {
                    senderName: "Zeplin",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
                {
                    senderName: "Zeplin",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
                {
                    senderName: "Zeplin",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
                {
                    senderName: "Zeplin",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
                {
                    senderName: "Zeplin",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
                {
                    senderName: "Zeplin",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
                {
                    senderName: "Zeplin",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Zeplin",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
            ],
            Squall: [
                {
                    senderName: "Squall",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Hey, how's it going?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Squall",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Squall",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
            ],
            Rinoa: [
                {
                    senderName: "Rinoa",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Hey, how's it going?",
                },
                {
                    senderName: "Laguna",
                    receiverName: "Rinoa",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "Pretty good, you?",
                },
                {
                    senderName: "Rinoa",
                    receiverName: "Laguna",
                    channel: ChatChannelTypeHrid.Whisper,
                    message: "I'm doing well, thanks for asking!",
                },
            ],
        };
    }

    tab: MooLiteTab = {
        icon: "💬",
        pluginName: this.name,
        componentName: "WhisperManagerPluginDisplay",
        component: markRaw(WhisperManagerPluginDisplay),
        width: "w-80",
    };

    onChatMessage(message: ChatMessage): void {
        if (!message.senderName) {
            message.senderName = "Server";
        }
        if (message.channel === ChatChannelTypeHrid.Whisper) {
            console.log("Whispered message", message);
            const { senderName, receiverName } = message;
            const otherName = senderName === this._game.character.name ? receiverName : senderName;
            this._conversations[otherName] ||= [];
            this._conversations[otherName].push(message);
            console.log("Conversations", this._conversations);
        } else {
            this._messages.push(message);
        }
    }
}
