import {ServerMessage} from "src/MooLite/core/server/ServerMessage";
import {ServerMessageType} from "src/MooLite/core/server/ServerMessageType";
import {CharacterAction} from "src/MooLite/core/actions/CharacterAction";
import {MessageParser} from "src/MooLite/core/server/MessageParser";
import {Game} from "src/MooLite/core/Game";

export interface InitCharacterInfoMessage extends ServerMessage {
    type: ServerMessageType.InitCharacterInfo;

    characterActions: CharacterAction[];
}

export class InitCharacterInfo extends MessageParser {
    type = ServerMessageType.InitCharacterInfo;

    apply(message: InitCharacterInfoMessage, game: Game): void {

        game.actionQueue.updateActions(message.characterActions);
        // TODO(@Isha): Parse everything here
        //  abilityCombatTriggersMap
        //  actionTypeDrinkSlotsMap
        //  actionTypeFoodSlotsMap
        //  blockerCharacterMap
        //  character
        //  characterAbilities
        //
        //  characterChatIconMap
        //  characterItems
        //  characterQuests
        //  characterSetting
        //  characterUpgradeMap
        //  chatHistoryByChannelMap
        //  chatWhisperHistory
        //  combatUnit
        //  communityActionTypeBuffsMap
        //  communityBuffs
        //  consumableActionTypeBuffsMap
        //  consumableCombatTriggersMap
        //  currentTimestamp
        //  email
        //  equipmentActionTypeBuffsMap
        //  guestPassword
        //  isDead
        //  minTotalLevelsToChat
        //  myMarketListings
        //  noncombatStats
        //  offlineItems
        //  offlineSkills
        //  respawnTime
        //  user
    }

}
