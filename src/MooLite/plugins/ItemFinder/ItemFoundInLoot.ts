import { DropTableLoot } from "src/MooLite/core/combat/DropTable";
import { MonsterHrid } from "src/MooLite/core/combat/monsters/MonsterHrid";

export interface ItemFoundInLoot {
    monsterName: string;
    monsterHrid: MonsterHrid;
    loot: DropTableLoot;
}
