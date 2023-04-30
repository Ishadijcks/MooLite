import { CombatAbility } from "src/MooLite/core/abilities/CombatAbility";
import { CombatDetails } from "src/MooLite/core/combat/CombatDetails";
import { DropTableLoot } from "src/MooLite/core/combat/DropTable";
import { MonsterHrid } from "src/MooLite/core/combat/monsters/MonsterHrid";

export interface MonsterDetail {
    abilities: CombatAbility[];
    combatDetails: CombatDetails;
    dropTable: DropTableLoot[];
    hrid: MonsterHrid;
    name: string;
    rareDropTable: DropTableLoot[];
}
