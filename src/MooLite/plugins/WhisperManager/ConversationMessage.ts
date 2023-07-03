import { ChatMessage } from "src/MooLite/core/chat/ChatMessage";

export interface ConversationMessage extends ChatMessage {
    isInbound: boolean;
}
