import { Skills } from "src/MooLite/core/skills/Skills";
import { Chat } from "src/MooLite/core/chat/Chat";
import { ActionQueue } from "src/MooLite/core/actions/ActionQueue";
import { Inventory } from "src/MooLite/core/inventory/Inventory";
import { Notifier } from "src/MooLite/core/notifications/Notifier";
import { InitClientInfoMessage } from "src/MooLite/core/server/messages/InitClientInfo";
import { Abilities } from "src/MooLite/core/abilities/Abilities";
import { Combat } from "src/MooLite/core/combat/Combat";
import { Leaderboard } from "src/MooLite/core/leaderboard/Leaderboard";

export class Game {
    abilities: Abilities;
    combat: Combat;
    leaderboard: Leaderboard;

    skills: Skills;
    chat: Chat;
    actionQueue: ActionQueue;
    inventory: Inventory;

    notifier: Notifier;

    activePlayerCount: number = 0;

    lastPing: Date | null = null;
    lastPong: Date | null = null;

    constructor(clientInfo: InitClientInfoMessage) {
        this.abilities = new Abilities(clientInfo.abilityDetailMap, clientInfo.abilitySlotsLevelRequirementList);
        this.combat = new Combat(clientInfo.combatMonsterDetailMap);
        this.leaderboard = new Leaderboard();
        this.skills = new Skills(clientInfo.skillDetailMap, clientInfo.levelExperienceTable);

        this.chat = new Chat(clientInfo.chatIconDetailMap);
        this.actionQueue = new ActionQueue(
            clientInfo.actionDetailMap,
            clientInfo.actionCategoryDetailMap,
            clientInfo.actionTypeDetailMap
        );
        this.inventory = new Inventory(clientInfo.itemDetailMap, clientInfo.itemCategoryDetailMap);

        this.notifier = new Notifier();
    }

    public get pingPong(): number {
        if (!this.lastPing || !this.lastPong) {
            return -1;
        }
        return this.lastPong.getTime() - this.lastPing.getTime();
    }
}
