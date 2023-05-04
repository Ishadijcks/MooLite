import { MonsterHrid } from "src/MooLite/core/combat/monsters/MonsterHrid";
import { MonsterDetail } from "src/MooLite/core/combat/monsters/MonsterDetail";
import { CombatTriggerComparatorHrid } from "src/MooLite/core/combat/triggers/CombatTriggerComparatorHrid";
import { CombatTriggerComparatorDetail } from "src/MooLite/core/combat/triggers/CombatTriggerComparatorDetail";
import { CombatTriggerConditionHrid } from "src/MooLite/core/combat/triggers/CombatTriggerConditionHrid";
import { CombatTriggerConditionDetail } from "src/MooLite/core/combat/triggers/CombatTriggerConditionDetail";
import { CombatTriggerDependencyHrid } from "src/MooLite/core/combat/triggers/CombatTriggerDepedencyHrid";
import { CombatTriggerDependencyDetail } from "src/MooLite/core/combat/triggers/CombatTriggerDependencyDetail";

export class Combat {
    public readonly monsterDetailMap: Record<MonsterHrid, MonsterDetail>;

    public readonly monsterDetailList: MonsterDetail[];

    public readonly combatTriggerComparatorMap: Record<CombatTriggerComparatorHrid, CombatTriggerComparatorDetail>;
    public readonly combatTriggerConditionMap: Record<CombatTriggerConditionHrid, CombatTriggerConditionDetail>;
    public readonly combatTriggerDependencyMap: Record<CombatTriggerDependencyHrid, CombatTriggerDependencyDetail>;

    constructor(
        monsterDetailMap: Record<MonsterHrid, MonsterDetail>,
        combatTriggerComparatorMap: Record<CombatTriggerComparatorHrid, CombatTriggerComparatorDetail>,
        combatTriggerConditionMap: Record<CombatTriggerConditionHrid, CombatTriggerConditionDetail>,
        combatTriggerDependencyMap: Record<CombatTriggerDependencyHrid, CombatTriggerDependencyDetail>
    ) {
        this.combatTriggerComparatorMap = combatTriggerComparatorMap;
        this.combatTriggerConditionMap = combatTriggerConditionMap;
        this.combatTriggerDependencyMap = combatTriggerDependencyMap;

        this.monsterDetailMap = monsterDetailMap;

        this.monsterDetailList = Object.values(this.monsterDetailMap).sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
    }
}
