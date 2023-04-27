import {ActionCategoryHrid} from "src/MooLite/core/actions/ActionCategoryHrid";
import {ExperienceGain} from "src/MooLite/core/skills/ExperienceGain";
import {ActionHrid} from "src/MooLite/core/actions/ActionHrid";
import {ItemAmount} from "src/MooLite/core/items/ItemAmount";
import {LevelRequirement} from "src/MooLite/core/skills/LevelRequirement";

export interface Action {
    baseTimeCost: number;
    category: ActionCategoryHrid;
    // TODO(@Isha): Add droptables
    // dropTable: DropTable | null;
    experienceGain: ExperienceGain;
    // TODO(@Isha): Check what ActionFunctions are
    // function: ActionFunction;
    hrid: ActionHrid;
    inputItems: ItemAmount[];
    levelRequirement: LevelRequirement;
    // TODO(@Isha): Add MonsterSpawnInfo
    // monsterSpawnInfo : MonsterSpawnInfo;
    name: string;
    outputItems: ItemAmount[];
    rareDropTable: string;
    sortIndex: number;
    // type: ActionType;
}
