import { Game } from "src/MooLite/core/Game";
import { CharacterAction } from "src/MooLite/core/actions/CharacterAction";
import { CharacterItem } from "src/MooLite/core/inventory/CharacterItem";
import { CharacterAbility } from "src/MooLite/core/abilities/CharacterAbility";
import { CharacterSkill } from "src/MooLite/core/skills/CharacterSkill";
import { MessageParser } from "../../MessageParser";
import { ServerMessage } from "../ServerMessage";
import { ServerMessageType } from "../ServerMessageType";

export interface ActionCompletedMessage extends ServerMessage {
    type: ServerMessageType.ActionCompleted;
    endCharacterAbilities: CharacterAbility[];
    endCharacterAction: CharacterAction;
    endCharacterItems: CharacterItem[];
    // endCharacterQuests: null;
    endCharacterSkills: CharacterSkill[];
}

export class ActionCompletedParser extends MessageParser {
    type = ServerMessageType.ActionCompleted;

    apply(message: ActionCompletedMessage, game: Game): void {
        game.abilities.updateCharacterAbilities(message.endCharacterAbilities);
        game.actionQueue.updateActions([message.endCharacterAction]);
        game.inventory.updateCharacterItems(message.endCharacterItems);
        // game.quests.updateQuests(message.endCharacterQuests);
        game.skills.updateCharacterSkills(message.endCharacterSkills);
    }
}
