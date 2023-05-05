import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { ChatMessage } from "src/MooLite/core/chat/ChatMessage";
import { PluginConfig } from "src/MooLite/core/plugins/config/PluginConfig";
import { PluginConfigType } from "src/MooLite/core/plugins/config/PluginConfigType";

export class ChatNotifierPlugin extends MooLitePlugin {
    name = "Chat Notifier";
    key = "chat-notifier";
    description = "Notifies your of chat messages";

    config: PluginConfig[] = [
        {
            type: PluginConfigType.Text,
            name: "Words",
            description: "Select the words to trigger a notification (comma separated)",
            key: "highlighted-words",
            value: "moooo, cow",
        },
    ];

    public get highlightedWords(): string[] {
        return this.getConfig("highlighted-words").value.replaceAll(", ", ",").split(",");
    }

    onChatMessage(message: ChatMessage): void {
        this.highlightedWords.forEach((word) => {
            if (message.message.toLowerCase().includes(word.toLowerCase())) {
                this._game.notifier.sendBrowserNotification(`Chat notification (${word}): ${message.message}`);
            }
        });
    }
}
