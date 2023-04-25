import {ChannelTypeHrid} from "src/MooLite/core/messages/chat/ChannelTypeHrid";

export interface ChatMessage {
    senderName: string;
    channel: ChannelTypeHrid;
    message: string;
}
