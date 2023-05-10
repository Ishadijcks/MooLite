import { ServerMessageType } from "src/MooLite/core/server/ServerMessageType";
import { MessageParser } from "src/MooLite/core/server/MessageParser";
import { Game } from "src/MooLite/core/Game";
import { ServerMessage } from "src/MooLite/core/server/ServerMessage";
import {CharacterAbility} from "src/MooLite/core/abilities/CharacterAbility";

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
