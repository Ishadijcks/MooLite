import {ServerMessage} from "src/MooLite/core/server/ServerMessage";
import {ServerMessageType} from "src/MooLite/core/server/ServerMessageType";
import {MessageParser} from "src/MooLite/core/server/MessageParser";
import {Game} from "src/MooLite/core/Game";
import {AbilityHrid} from "src/MooLite/core/abilities/AbilityHrid";
import {AbilityDetail} from "src/MooLite/core/abilities/AbilityDetail";
import {ActionCategoryHrid} from "src/MooLite/core/actions/ActionCategoryHrid";
import {ActionCategoryDetail} from "src/MooLite/core/actions/ActionCategoryDetail";
import {ActionHrid} from "src/MooLite/core/actions/ActionHrid";
import {ActionDetail} from "src/MooLite/core/actions/ActionDetail";
import {SkillHrid} from "src/MooLite/core/skills/SkillHrid";
import {SkillDetail} from "src/MooLite/core/skills/SkillDetail";
import {BuffTypeHrid} from "src/MooLite/core/combat/buffs/BuffTypeHrid";
import {ChatIconHrid} from "src/MooLite/core/chat/ChatIconHrid";
import {ItemLocationHrid} from "src/MooLite/core/inventory/ItemLocationHrid";
import {ItemHrid} from "src/MooLite/core/inventory/ItemHrid";
import {DamageTypeHrid} from "src/MooLite/core/combat/DamageTypeHrid";
import {CombatStyleHrid} from "src/MooLite/core/combat/CombatStyleHrid";
import {CombatTriggerComparatorHrid} from "src/MooLite/core/combat/triggers/CombatTriggerComparatorHrid";
import {CombatTriggerConditionHrid} from "src/MooLite/core/combat/triggers/CombatTriggerConditionHrid";
import {CombatTriggerDependencyHrid} from "src/MooLite/core/combat/triggers/CombatTriggerDepedencyHrid";

export interface InitClientInfoMessage extends ServerMessage {
    type: ServerMessageType.InitClientInfo;

    // abilityDetailMap: Record<AbilityHrid, AbilityDetail>;
    // abilitySlotsLevelRequirementList: number[];
    // actionCategoryDetailMap: Record<ActionCategoryHrid, ActionCategoryDetail>;
    // actionDetailMap: Record<ActionHrid, ActionDetail>
    // actionTypeMap: Record<ActionTypeHrid, ActionType>;
    // buffTypeDetailMap: Record<BuffTypeHrid, BuffTypeDetail>;
    // buyableUpgradeDetailMap: Record<BuyableUpgradeHrid, BuyableUpgradeDetail>;
    // chatIconDetailMap: Record<ChatIconHrid, ChatIconDetail>;
    // combatMonsterDetailMap: Record<CombatMonsterHrid, CombatMonsterDetail>;
    // combatStyleDetailMap: Record<CombatStyleHrid, CombatStyleDetail>;
    // combatTriggerComparatorDetailMap: Record<CombatTriggerComparatorHrid, CombatTriggerComparatorDetail>;
    // combatTriggerConditionDetailMap: Record<CombatTriggerConditionHrid, CombatTriggerConditionDetail>;
    // combatTriggerDependencyDetailMap: Record<CombatTriggerDependencyHrid, CombatTriggerDependencyDetail>;
    // communityBuffTypeDetailMap: Record<CommunityBuffTypeHrid, CommunityBuffTypeDetail>;
    // cowbellBundleDetailMap: Record<string, CowbellBundleDetail>;
    // currentTimestamp: string;
    // damageTypeDetailMap: Record<DamageTypeHrid, DamageTypeDetail>;
    // enhancementLevelSuccessRateTable: number;
    // enhancementLevelTotalBonusMultiplierTable: number;
    // equipmentTypeDetailMap: Record<EquipmentTypeHrid, EquipmentTypeDetail>;
    // gameVersion: string;
    // itemCategoryDetailMap: Record<ItemCategoryHrid, ItemCategoryDetail>;
    // itemDetailMap: Record<ItemHrid, ItemDetail>;
    // itemLocationDetailMap: Record<ItemLocationHrid, ItemLocationDetail>;
    // levelExperienceTable: number[];
    // shopItemDetailMap: Record<string, unknown>;
    skillDetailMap: Record<SkillHrid, SkillDetail>;
    // versionTimeStamp: string;
}

export class InitClientInfoParser extends MessageParser {
    type = ServerMessageType.InitClientInfo;

    apply(message: InitClientInfoMessage, game: Game): void {

    }

}
