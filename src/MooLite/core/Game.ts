import {Skills} from "src/MooLite/core/skills/Skills";
import {Chat} from "src/MooLite/core/chat/Chat";
import {ActionQueue} from "src/MooLite/core/actions/ActionQueue";
import {Inventory} from "src/MooLite/core/inventory/Inventory";
import {Notifier} from "src/MooLite/core/notifications/Notifier";

export class Game {
    skills: Skills;
    chat: Chat;
    actionQueue: ActionQueue;
    inventory: Inventory;

    notifier: Notifier;

    activePlayerCount: number = 0;

    constructor() {
        this.skills = new Skills();
        this.chat = new Chat();
        this.actionQueue = new ActionQueue();
        this.inventory = new Inventory();

        this.notifier = new Notifier();
    }

}
