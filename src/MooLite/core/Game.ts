import {Skills} from "src/MooLite/core/skills/Skills";
import {Chat} from "src/MooLite/core/chat/Chat";

export class Game {
    skills: Skills;
    chat: Chat;

    activePlayerCount: number = 0;

    constructor() {
        this.skills = new Skills();
        this.chat = new Chat();
    }

}
