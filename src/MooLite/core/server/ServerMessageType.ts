export enum ServerMessageType {
    // Internals,
    InitClientInfo = "init_client_info",
    InitCharacterInfo = "init_character_info",
    Pong = "pong",

    // Meta
    ActivePlayerCountUpdated = "active_player_count_updated",

    Info = "info",

    CharacterStatsUpdated = "character_stats_updated",
    EquipmentBuffsUpdated = "equipment_buffs_updated",
    ItemsUpdated = "items_updated",

    LootOpened = "loot_opened",

    // Actions
    ActionCompleted = "action_completed",
    ActionsUpdated = "actions_updated",
    ConsumableSlotsUpdated = "action_type_consumable_slots_updated",

    // Chat
    ChatMessageReceived = "chat_message_received",

    // Combat
    CombatTriggersUpdated = "combat_triggers_updated",

    // Leaderboard
    LeaderboardInfoUpdated = "leaderboard_info_updated",
}
