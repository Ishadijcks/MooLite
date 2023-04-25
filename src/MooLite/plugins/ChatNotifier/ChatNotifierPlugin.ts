import {MooLitePlugin} from "src/MooLite/plugins/MooLitePlugin";
import {ChatMessage} from "src/MooLite/core/chat/ChatMessage";

export class ChatNotifierPlugin extends MooLitePlugin {
    name = "Chat Notifier"
    targetWords: string[] = [];

    initialize(): void {
    }

    onChatMessage(message: ChatMessage): void {
        this.targetWords.forEach(word => {
            if (message.message.includes(word)) {
                console.log("Word found:", word)
                return;
            }
        })
    }
}
