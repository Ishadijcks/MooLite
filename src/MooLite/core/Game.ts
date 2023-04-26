import {Skills} from "src/MooLite/core/skills/Skills";
import {Chat} from "src/MooLite/core/chat/Chat";
import {ActionQueue} from "src/MooLite/core/actions/ActionQueue";
import {Inventory} from "src/MooLite/core/inventory/Inventory";

export class Game {
    skills: Skills;
    chat: Chat;
    actionQueue: ActionQueue;
    inventory: Inventory;

    activePlayerCount: number = 0;

    constructor() {
        this.skills = new Skills();
        this.chat = new Chat();
        this.actionQueue = new ActionQueue();
        this.inventory = new Inventory();
    }

}
