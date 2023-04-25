import {ChannelTypeHrid} from "src/MooLite/core/chat/ChannelTypeHrid";

export interface ChatMessage {
    senderName: string;
    channel: ChannelTypeHrid;
    message: string;
}
