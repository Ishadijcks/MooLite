export enum ServerMessageType {
    InitClientInfo = "init_client_info",
    InitCharacterInfo = "init_character_info",

    Info = "info",

    ActivePlayerCountUpdated = "active_player_count_updated",

    // Actions
    ActionCompleted = "action_completed",
    ActionsUpdated = "actions_updated",

    // Chat
    ChatMessageReceived = "chat_message_received",
}
