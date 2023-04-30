import { MonsterHrid } from "src/MooLite/core/combat/monsters/MonsterHrid";
import { MonsterDetail } from "src/MooLite/core/combat/monsters/MonsterDetail";

export class Combat {
    public readonly monsterDetailMap: Record<MonsterHrid, MonsterDetail>;

    public readonly monsterDetailList: MonsterDetail[];

    constructor(monsterDetailMap: Record<MonsterHrid, MonsterDetail>) {
        this.monsterDetailMap = monsterDetailMap;

        this.monsterDetailList = Object.values(this.monsterDetailMap).sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
    }
}
