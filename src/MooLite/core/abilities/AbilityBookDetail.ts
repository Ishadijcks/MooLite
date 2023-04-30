import { AbilityHrid } from "src/MooLite/core/abilities/AbilityHrid";
import { LevelRequirement } from "src/MooLite/core/skills/LevelRequirement";

export interface AbilityBookDetail {
    abilityHrid: AbilityHrid;
    experienceGain: number;
    levelRequirements: LevelRequirement[] | null;
}
