export enum ServerMessageType {
    InitClientInfo = "init_client_info",
    InitCharacterInfo = "init_character_info",

    Info = "info",

    ActivePlayerCountUpdated = "active_player_count_updated",

    ActionCompleted = "action_completed",


    // Chat
    ChatMessageReceived = "chat_message_received"
}
