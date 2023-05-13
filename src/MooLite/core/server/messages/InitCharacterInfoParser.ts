import { ServerMessage } from "src/MooLite/core/server/ServerMessage";
import { ServerMessageType } from "src/MooLite/core/server/ServerMessageType";
import { CharacterAction } from "src/MooLite/core/actions/CharacterAction";
import { MessageParser } from "src/MooLite/core/server/MessageParser";
import { Game } from "src/MooLite/core/Game";
import { CharacterItem } from "src/MooLite/core/inventory/CharacterItem";
import { CharacterSkill } from "src/MooLite/core/skills/CharacterSkill";
import { CharacterAbility } from "src/MooLite/core/abilities/CharacterAbility";
import { AbilityHrid } from "src/MooLite/core/abilities/AbilityHrid";
import { CombatTrigger } from "src/MooLite/core/combat/triggers/CombatTrigger";
import { ChatIconHrid } from "src/MooLite/core/chat/ChatIconHrid";
import { CharacterChatIcon } from "src/MooLite/core/chat/CharacterChatIton";
import { ActionTypeHrid } from "src/MooLite/core/actions/ActionTypeHrid";
import { CharacterConsumable } from "src/MooLite/core/inventory/items/CharacterConsumable";
import { CombatUnit } from "src/MooLite/core/combat/CombatUnit";
import { NonCombatStats } from "src/MooLite/core/equipment/NonCombatStats";

export interface InitCharacterInfoMessage extends ServerMessage {
    type: ServerMessageType.InitCharacterInfo;

    actionTypeDrinkSlotsMap: Record<ActionTypeHrid, CharacterConsumable[]>;
    actionTypeFoodSlotsMap: Record<ActionTypeHrid, CharacterConsumable[]>;
    abilityCombatTriggersMap: Record<AbilityHrid, CombatTrigger>;
    characterAbilities: CharacterAbility[] | null;
    characterActions: CharacterAction[];
    characterChatIconMap: Record<ChatIconHrid, CharacterChatIcon>;
    characterItems: CharacterItem[];
    characterSkills: CharacterSkill[];
    combatUnit: CombatUnit;
    noncombatStats: NonCombatStats;
}

export class InitCharacterInfoParser extends MessageParser {
    type = ServerMessageType.InitCharacterInfo;

    apply(message: InitCharacterInfoMessage, game: Game): void {
        console.log(message);
        game.abilities.updateCharacterAbilities(message.characterAbilities, false);
        game.abilities.updateCombatTriggers(message.abilityCombatTriggersMap);
        game.actionQueue.updateActions(message.characterActions);
        game.inventory.updateCharacterItems(message.characterItems, false);
        game.inventory.updateCharacterDrinks(message.actionTypeDrinkSlotsMap);
        game.inventory.updateCharacterFood(message.actionTypeFoodSlotsMap);
        game.skills.updateCharacterSkills(message.characterSkills, false);
        // TODO(@Isha): Parse everything here
        //
        //  blockerCharacterMap
        //  character
        game.chat.updateCharacterChatIcons(message.characterChatIconMap);
        //  characterQuests
        //  characterSetting
        //  characterUpgradeMap
        //  chatHistoryByChannelMap
        //  chatWhisperHistory
        game.combat.updateCombatUnit(message.combatUnit, false);
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
        game.equipment.updateNonCombatStats(message.noncombatStats, false);
        //  offlineItems
        //  offlineSkills
        //  respawnTime
        //  user
    }
}
