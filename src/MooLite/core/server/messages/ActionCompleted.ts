import {ServerMessage} from "src/MooLite/core/server/ServerMessage";
import {ServerMessageType} from "src/MooLite/core/server/ServerMessageType";
import {SkillInfo} from "src/MooLite/core/skills/SkillInfo";
import {MessageParser} from "src/MooLite/core/server/MessageParser";
import {Game} from "src/MooLite/core/Game";
import {CharacterAction} from "src/MooLite/core/actions/CharacterAction";

export interface ActionCompletedMessage extends ServerMessage {
    type: ServerMessageType.ActionCompleted;
    endCharacterSkills: SkillInfo[]
    endCharacterAction: CharacterAction;
}

export class ActionCompletedParser extends MessageParser {
    type = ServerMessageType.ActionCompleted;

    apply(message: ActionCompletedMessage, game: Game): void {
        // TODO(@Isha): Get all information out of this message
        //
        message.endCharacterSkills.forEach(info => {
            game.skills.updateSkill(info)
        })

        game.actionQueue.updateActions([message.endCharacterAction]);
    }

}
