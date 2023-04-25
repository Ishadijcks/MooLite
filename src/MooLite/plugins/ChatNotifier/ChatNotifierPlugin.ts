import {MooLitePlugin} from "src/MooLite/plugins/MooLitePlugin";
import {ChatMessage} from "src/MooLite/core/chat/ChatMessage";

export class ChatNotifierPlugin extends MooLitePlugin {

    targetWords: string[] = ["a", "b"];

    initialize(): void {
    }

    onChatMessage(message: ChatMessage): void {
        console.log(message);
        this.targetWords.forEach(word => {
            if (message.message.includes(word)) {
                console.log("Word found:", word, message.message)
            }
        })
    }


}
