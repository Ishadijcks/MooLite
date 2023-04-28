import {Skills} from "src/MooLite/core/skills/Skills";
import {Chat} from "src/MooLite/core/chat/Chat";
import {ActionQueue} from "src/MooLite/core/actions/ActionQueue";
import {Inventory} from "src/MooLite/core/inventory/Inventory";
import {Notifier} from "src/MooLite/core/notifications/Notifier";
import {InitClientInfoMessage} from "src/MooLite/core/server/messages/InitClientInfo";
import {Abilities} from "src/MooLite/core/abilities/Abilities";
import {Combat} from "src/MooLite/core/combat/Combat";

export class Game {
    abilities: Abilities;
    combat: Combat;

    skills: Skills;
    chat: Chat;
    actionQueue: ActionQueue;
    inventory: Inventory;

    notifier: Notifier;

    activePlayerCount: number = 0;

    constructor(clientInfo: InitClientInfoMessage) {
        this.abilities = new Abilities(clientInfo.abilityDetailMap, clientInfo.abilitySlotsLevelRequirementList)
        this.combat = new Combat(clientInfo.combatMonsterDetailMap);
        this.skills = new Skills(clientInfo.skillDetailMap, clientInfo.levelExperienceTable);
        this.chat = new Chat();
        this.actionQueue = new ActionQueue(clientInfo.actionDetailMap, clientInfo.actionCategoryDetailMap);
        this.inventory = new Inventory(clientInfo.itemDetailMap, clientInfo.itemCategoryDetailMap);

        this.notifier = new Notifier();
    }

}
