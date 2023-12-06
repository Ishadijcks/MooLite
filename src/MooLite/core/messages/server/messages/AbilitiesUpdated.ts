import { CharacterAbility } from "src/MooLite/core/abilities/CharacterAbility";
import { ServerMessageType } from "../ServerMessageType";
import { ServerMessage } from "../ServerMessage";
import { MessageParser } from "../../MessageParser";
import { Game } from "src/MooLite/core/Game";

export interface AbilitiesUpdatedMessage extends ServerMessage {
    type: ServerMessageType.AbilitiesUpdated;

    endCharacterAbilities: CharacterAbility[];
}

export class AbilitiesUpdatedParser extends MessageParser {
    type = ServerMessageType.AbilitiesUpdated;

    apply(message: AbilitiesUpdatedMessage, game: Game): void {
        game.abilities.updateCharacterAbilities(message.endCharacterAbilities);
    }
}
