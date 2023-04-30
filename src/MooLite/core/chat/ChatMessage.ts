import { ChatChannelTypeHrid } from "src/MooLite/core/chat/ChatChannelTypeHrid";

export interface ChatMessage {
    senderName: string;
    receiverName: string;
    channel: ChatChannelTypeHrid;
    message: string;
}
