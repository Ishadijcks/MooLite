import {ServerMessage} from "src/MooLite/core/server/ServerMessage";
import {ServerMessageType} from "src/MooLite/core/server/ServerMessageType";
import {MessageParser} from "src/MooLite/core/server/MessageParser";
import {Game} from "src/MooLite/core/Game";
import {AbilityHrid} from "src/MooLite/core/abilities/AbilityHrid";
import {AbilityDetail} from "src/MooLite/core/abilities/AbilityDetail";
import {SkillHrid} from "src/MooLite/core/skills/SkillHrid";
import {SkillDetail} from "src/MooLite/core/skills/SkillDetail";
import {MonsterHrid} from "src/MooLite/core/combat/monsters/MonsterHrid";
import {MonsterDetail} from "src/MooLite/core/combat/monsters/MonsterDetail";

export interface InitClientInfoMessage extends ServerMessage {
    type: ServerMessageType.InitClientInfo;

    abilityDetailMap: Record<AbilityHrid, AbilityDetail>;
    abilitySlotsLevelRequirementList: number[];
    // actionCategoryDetailMap: Record<ActionCategoryHrid, ActionCategoryDetail>;
    // actionDetailMap: Record<ActionHrid, ActionDetail>
    // actionTypeMap: Record<ActionTypeHrid, ActionType>;
    // buffTypeDetailMap: Record<BuffTypeHrid, BuffTypeDetail>;
    // buyableUpgradeDetailMap: Record<BuyableUpgradeHrid, BuyableUpgradeDetail>;
    // chatIconDetailMap: Record<ChatIconHrid, ChatIconDetail>;
    combatMonsterDetailMap: Record<MonsterHrid, MonsterDetail>;
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
    levelExperienceTable: number[];
    // shopItemDetailMap: Record<string, unknown>;
    skillDetailMap: Record<SkillHrid, SkillDetail>;
    // versionTimeStamp: string;
}

export class InitClientInfoParser extends MessageParser {
    type = ServerMessageType.InitClientInfo;

    apply(message: InitClientInfoMessage, game: Game): void {

    }

}
