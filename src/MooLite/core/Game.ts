import {Skills} from "src/MooLite/core/skills/Skills";
import {Chat} from "src/MooLite/core/chat/Chat";
import {ActionQueue} from "src/MooLite/core/actions/ActionQueue";
import {Inventory} from "src/MooLite/core/inventory/Inventory";
import {Notifier} from "src/MooLite/core/notifications/Notifier";
import {InitClientInfoMessage} from "src/MooLite/core/server/messages/InitClientInfo";
import {Abilities} from "src/MooLite/core/abilities/Abilities";

export class Game {
    abilities: Abilities;

    skills: Skills;
    chat: Chat;
    actionQueue: ActionQueue;
    inventory: Inventory;

    notifier: Notifier;

    activePlayerCount: number = 0;

    constructor(clientInfo: InitClientInfoMessage) {
        this.abilities = new Abilities(clientInfo.abilityDetailMap, clientInfo.abilitySlotsLevelRequirementList)
        this.skills = new Skills(clientInfo.skillDetailMap, clientInfo.levelExperienceTable);
        this.chat = new Chat();
        this.actionQueue = new ActionQueue();
        this.inventory = new Inventory();

        this.notifier = new Notifier();
    }

}
