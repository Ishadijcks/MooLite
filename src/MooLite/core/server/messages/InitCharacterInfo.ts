import {ServerMessage} from "src/MooLite/core/server/ServerMessage";
import {ServerMessageType} from "src/MooLite/core/server/ServerMessageType";
import {CharacterAction} from "src/MooLite/core/actions/CharacterAction";
import {MessageParser} from "src/MooLite/core/server/MessageParser";
import {Game} from "src/MooLite/core/Game";
import {CharacterItem} from "src/MooLite/core/inventory/CharacterItem";
import {CharacterSkill} from "src/MooLite/core/skills/CharacterSkill";
import {CharacterAbility} from "src/MooLite/core/abilities/CharacterAbility";
import {AbilityHrid} from "src/MooLite/core/abilities/AbilityHrid";
import {CombatTrigger} from "src/MooLite/core/combat/triggers/CombatTrigger";

export interface InitCharacterInfoMessage extends ServerMessage {
    type: ServerMessageType.InitCharacterInfo;

    abilityCombatTriggersMap: Record<AbilityHrid, CombatTrigger>
    characterAbilities: CharacterAbility[] | null;
    characterActions: CharacterAction[];
    characterItems: CharacterItem[]
    characterSkills: CharacterSkill[]
}

export class InitCharacterInfo extends MessageParser {
    type = ServerMessageType.InitCharacterInfo;

    apply(message: InitCharacterInfoMessage, game: Game): void {
        game.abilities.updateCharacterAbilities(message.characterAbilities);
        game.actionQueue.updateActions(message.characterActions);
        game.inventory.updateItems(message.characterItems);
        game.skills.updateCharacterSkills(message.characterSkills, false)
        // TODO(@Isha): Parse everything here
        //
        //  actionTypeDrinkSlotsMap
        //  actionTypeFoodSlotsMap
        //  blockerCharacterMap
        //  character
        //  characterChatIconMap
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
