import {ServerMessage} from "src/MooLite/core/server/ServerMessage";
import {ServerMessageType} from "src/MooLite/core/server/ServerMessageType";
import {ChannelTypeHrid} from "src/MooLite/core/chat/ChannelTypeHrid";
import {ChatIconHrid} from "src/MooLite/core/chat/ChatIconHrid";

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
