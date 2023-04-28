import {ActionCategoryHrid} from "src/MooLite/core/actions/ActionCategoryHrid";
import {ExperienceGain} from "src/MooLite/core/skills/ExperienceGain";
import {ActionHrid} from "src/MooLite/core/actions/ActionHrid";
import {LevelRequirement} from "src/MooLite/core/skills/LevelRequirement";
import {ItemAmount} from "src/MooLite/core/inventory/items/ItemAmount";
import {DropTableLoot} from "src/MooLite/core/combat/DropTable";
import {ActionTypeHrid} from "src/MooLite/core/actions/ActionTypeHrid";

export interface ActionDetail {
    baseTimeCost: number;
    category: ActionCategoryHrid;
    dropTable: DropTableLoot[] | null;
    experienceGain: ExperienceGain;
    // TODO(@Isha): Check what ActionFunctions are
    // function: ActionFunction;
    hrid: ActionHrid;
    inputItems: ItemAmount[] | null;
    levelRequirement: LevelRequirement;
    // TODO(@Isha): Add MonsterSpawnInfo
    // monsterSpawnInfo : MonsterSpawnInfo;
    name: string;
    outputItems: ItemAmount[];
    rareDropTable: string;
    sortIndex: number;
    type: ActionTypeHrid;
}
