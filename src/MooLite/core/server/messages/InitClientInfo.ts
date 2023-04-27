import {ServerMessage} from "src/MooLite/core/server/ServerMessage";
import {ServerMessageType} from "src/MooLite/core/server/ServerMessageType";
import {MessageParser} from "src/MooLite/core/server/MessageParser";
import {Game} from "src/MooLite/core/Game";
import {AbilityHrid} from "src/MooLite/core/abilities/AbilityHrid";
import {Ability} from "src/MooLite/core/abilities/Ability";
import {ActionCategoryHrid} from "src/MooLite/core/actions/ActionCategoryHrid";
import {ActionCategory} from "src/MooLite/core/actions/ActionCategory";
import {ActionHrid} from "src/MooLite/core/actions/ActionHrid";
import {Action} from "src/MooLite/core/actions/Action";
import {SkillHrid} from "src/MooLite/core/skills/SkillHrid";
import {SkillDetail} from "src/MooLite/core/skills/SkillDetail";

export interface InitClientInfoMessage extends ServerMessage {
    type: ServerMessageType.InitClientInfo;

    abilityDetailMap: Record<AbilityHrid, Ability>;
    abilitySlotsLevelRequirementList: number[];
    actionCategoryDetailMap: Record<ActionCategoryHrid, ActionCategory>;
    actionDetailMap: Record<ActionHrid, Action>


    // Done
    skillDetailMap: Record<SkillHrid, SkillDetail>;
}

export class InitClientInfoParser extends MessageParser {
    type = ServerMessageType.InitClientInfo;

    apply(message: InitClientInfoMessage, game: Game): void {

    }

}
