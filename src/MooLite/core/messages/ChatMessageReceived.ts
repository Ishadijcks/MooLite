import {ServerMessage} from "src/MooLite/core/messages/ServerMessage";
import {ServerMessageType} from "src/MooLite/core/messages/ServerMessageType";
import {ChannelTypeHrid} from "src/MooLite/core/messages/chat/ChannelTypeHrid";
import {ChatIconHrid} from "src/MooLite/core/messages/chat/ChatIconHrid";

export interface ChatMessageReceived extends ServerMessage {
    type: ServerMessageType.ChatMessageReceived

    message: {
        cannotBlock: boolean;
        channelTypeHrid: ChannelTypeHrid;
        characterId: number;
        chatIconHrid: ChatIconHrid;
        id: number;
        isDeleted: boolean;
        isSystemMessage: boolean;
        linksMetaData: string;
        message: string;
        receiverCharacterID: number;
        receiverName: string;
        senderName: string;
        // TODO(@Isha): turn into enum
        specialChatIconHrid: string;
        // TODO(@Isha): turn into date?
        timeStamp: string
    }
}
