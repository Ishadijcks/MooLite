import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { MooLiteTab } from "src/MooLite/core/plugins/MooLiteTab";
import { markRaw } from "vue";
import WhisperManagerPluginDisplay from "src/MooLite/plugins/WhisperManager/WhisperManagerPluginDisplay.vue";
import { ChatMessage } from "src/MooLite/core/chat/ChatMessage";

export class WhisperManagerPlugin extends MooLitePlugin {
    name: string = "Whisper Manager";
    key = "whisper-manager";
    description: string = "A plugin to help manage all of your conversations!";

    _messages: ChatMessage[] = [];

    public get messages(): ChatMessage[] {
        return this._messages;
    }

    tab: MooLiteTab = {
        icon: "💬",
        pluginName: this.name,
        componentName: "WhisperManagerPluginDisplay",
        component: markRaw(WhisperManagerPluginDisplay),
    };

    onChatMessage(message: ChatMessage): void {
        if (!message.senderName) {
            message.senderName = "Server";
        }
        this._messages.push(message);
    }
}

