import {MooLitePlugin} from "src/MooLite/plugins/MooLitePlugin";
import {ChatMessage} from "src/MooLite/core/chat/ChatMessage";

export class ChatNotifierPlugin extends MooLitePlugin {
    name = "Chat Notifier"
    targetWords: string = "Word1, Word2";

    onChatMessage(message: ChatMessage): void {
        const words = this.targetWords.split(",");
        words.forEach(word => {
            if (message.message.toLowerCase().includes(word.toLowerCase())) {
                console.log(`Word found: ${word}`)
                return;
            }
        })
    }
}
