import { CombatStats } from "src/MooLite/core/combat/CombatStats";
import { LevelRequirement } from "src/MooLite/core/skills/LevelRequirement";
import { NonCombatStats } from "src/MooLite/core/noncombat/NonCombatStats";
import { EquipmentTypeHrid } from "src/MooLite/core/inventory/items/EquipmentTypeHrid";

export interface EquipmentDetail {
    combatEnhancementBonuses: CombatStats;
    combatStats: CombatStats;
    levelRequirements: LevelRequirement[] | null;
    nonCombatEnhancementBonuses: NonCombatStats;
    nonCombatStats: NonCombatStats;
    type: EquipmentTypeHrid;
}
