import {ServerMessage} from "src/MooLite/core/server/ServerMessage";
import {ServerMessageType} from "src/MooLite/core/server/ServerMessageType";
import {CharacterSkill} from "src/MooLite/core/skills/CharacterSkill";
import {MessageParser} from "src/MooLite/core/server/MessageParser";
import {Game} from "src/MooLite/core/Game";
import {CharacterAction} from "src/MooLite/core/actions/CharacterAction";
import {CharacterItem} from "src/MooLite/core/inventory/CharacterItem";

export interface ActionCompletedMessage extends ServerMessage {
    type: ServerMessageType.ActionCompleted;
    endCharacterSkills: CharacterSkill[];
    endCharacterAction: CharacterAction;
    endCharacterItems: CharacterItem[];
}

export class ActionCompletedParser extends MessageParser {
    type = ServerMessageType.ActionCompleted;

    apply(message: ActionCompletedMessage, game: Game): void {
        // TODO(@Isha): Get all information out of this message
        //
        game.skills.updateSkills(message.endCharacterSkills);
        game.inventory.updateItems(message.endCharacterItems);

        game.actionQueue.updateActions([message.endCharacterAction]);
    }

}
