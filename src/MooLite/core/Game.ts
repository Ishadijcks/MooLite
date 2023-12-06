import { Skills } from "src/MooLite/core/skills/Skills";
import { Chat } from "src/MooLite/core/chat/Chat";
import { ActionQueue } from "src/MooLite/core/actions/ActionQueue";
import { Inventory } from "src/MooLite/core/inventory/Inventory";
import { Notifier } from "src/MooLite/core/notifications/Notifier";
import { Abilities } from "src/MooLite/core/abilities/Abilities";
import { Combat } from "src/MooLite/core/combat/Combat";
import { Leaderboard } from "src/MooLite/core/leaderboard/Leaderboard";
import { Equipment } from "src/MooLite/core/equipment/Equipment";
import { LootBoxes } from "src/MooLite/core/lootboxes/LootBoxes";
import { Character } from "src/MooLite/core/character/Character";
import { InitClientInfoMessage } from "./messages/server/messages/InitClientInfo";

export class Game {
    gameVersion: string;
    versionTimestamp: string;

    abilities: Abilities;
    character: Character;
    combat: Combat;
    equipment: Equipment;
    leaderboard: Leaderboard;
    lootBoxes: LootBoxes;
    skills: Skills;
    chat: Chat;
    actionQueue: ActionQueue;
    inventory: Inventory;

    notifier: Notifier;

    activePlayerCount: number = 0;

    lastPing: Date | null = null;
    lastPong: Date | null = null;

    constructor(clientInfo: InitClientInfoMessage) {
        this.gameVersion = clientInfo.gameVersion;
        this.versionTimestamp = clientInfo.versionTimeStamp;

        this.abilities = new Abilities(clientInfo.abilityDetailMap, clientInfo.abilitySlotsLevelRequirementList);
        this.combat = new Combat(
            clientInfo.combatMonsterDetailMap,
            clientInfo.combatTriggerComparatorDetailMap,
            clientInfo.combatTriggerConditionDetailMap,
            clientInfo.combatTriggerDependencyDetailMap
        );
        this.leaderboard = new Leaderboard();
        this.lootBoxes = new LootBoxes();
        this.skills = new Skills(clientInfo.skillDetailMap, clientInfo.levelExperienceTable);

        this.chat = new Chat(clientInfo.chatIconDetailMap);
        this.character = {} as Character;
        this.actionQueue = new ActionQueue(
            clientInfo.actionDetailMap,
            clientInfo.actionCategoryDetailMap,
            clientInfo.actionTypeDetailMap
        );
        this.equipment = new Equipment(clientInfo.equipmentTypeDetailMap);
        this.inventory = new Inventory(
            clientInfo.itemDetailMap,
            clientInfo.itemCategoryDetailMap,
            clientInfo.itemLocationDetailMap
        );

        this.notifier = new Notifier();
    }

    public get pingPong(): number {
        if (!this.lastPing || !this.lastPong) {
            return -1;
        }
        return this.lastPong.getTime() - this.lastPing.getTime();
    }
}
