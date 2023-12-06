import { ChatChannelTypeHrid } from "src/MooLite/core/chat/ChatChannelTypeHrid";
import { ChatIconHrid } from "src/MooLite/core/chat/ChatIconHrid";
import { Game } from "src/MooLite/core/Game";
import { MessageParser } from "../../MessageParser";
import { ServerMessage } from "../ServerMessage";
import { ServerMessageType } from "../ServerMessageType";

export interface ChatMessageReceived extends ServerMessage {
    type: ServerMessageType.ChatMessageReceived;

    message: {
        cannotBlock: boolean;
        channelTypeHrid: ChatChannelTypeHrid;
        characterId: number;
        chatIconHrid: ChatIconHrid;
        id: number;
        isDeleted: boolean;
        isModMessage: boolean;
        isSystemMessage: boolean;
        linksMetaData: string;
        message: string;
        receiverCharacterID: number;
        receiverName: string;
        senderName: string;
        // TODO(@Isha): turn into enum
        specialChatIconHrid: string;
        // TODO(@Isha): turn into date?
        timeStamp: string;
    };
}

export class ChatMessageReceivedParser extends MessageParser {
    type = ServerMessageType.ChatMessageReceived;

    apply(message: ChatMessageReceived, game: Game): void {
        game.chat.addMessage({
            message: message.message.message,
            channel: message.message.channelTypeHrid,
            senderName: message.message.senderName,
            receiverName: message.message.receiverName,
            isDeleted: message.message.isDeleted,
            isModMessage: message.message.isModMessage,
            isSystemMessage: message.message.isSystemMessage,
        });
    }
}
