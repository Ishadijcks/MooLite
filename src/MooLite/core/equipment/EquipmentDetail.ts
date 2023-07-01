import { CombatStats } from "src/MooLite/core/combat/CombatStats";
import { LevelRequirement } from "src/MooLite/core/skills/LevelRequirement";
import { NonCombatStats } from "src/MooLite/core/equipment/NonCombatStats";
import { EquipmentTypeHrid } from "src/MooLite/core/equipment/EquipmentTypeHrid";

export interface EquipmentDetail {
    combatEnhancementBonuses: CombatStats;
    combatStats: CombatStats;
    levelRequirements: LevelRequirement[] | null;
    noncombatEnhancementBonuses: NonCombatStats;
    noncombatStats: NonCombatStats;
    type: EquipmentTypeHrid;
}
