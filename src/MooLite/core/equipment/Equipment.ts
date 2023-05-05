import { NonCombatStats } from "src/MooLite/core/equipment/NonCombatStats";
import { SimpleEventDispatcher } from "strongly-typed-events";
import { EquipmentActionTypeBuff } from "src/MooLite/core/equipment/EquipmentActionTypeBuff";
import { ActionTypeHrid } from "src/MooLite/core/actions/ActionTypeHrid";
import { EquipmentTypeHrid } from "src/MooLite/core/equipment/EquipmentTypeHrid";
import { EquipmentTypeDetail } from "src/MooLite/core/equipment/EquipmentTypeDetail";

export class Equipment {
    private _nonCombatStats!: NonCombatStats;
    private _equipmentActionTypeBuffs: Record<ActionTypeHrid, EquipmentActionTypeBuff> = {};

    private _onNonCombatStatsChanged = new SimpleEventDispatcher<NonCombatStats>();
    private _onEquipmentActionTypeBuffsChanged = new SimpleEventDispatcher<
        Record<ActionTypeHrid, EquipmentActionTypeBuff>
    >();

    public readonly equipmentTypeDetailMap: Record<EquipmentTypeHrid, EquipmentTypeDetail>;

    constructor(equipmentTypeDetailMap: Record<EquipmentTypeHrid, EquipmentTypeDetail>) {
        this.equipmentTypeDetailMap = equipmentTypeDetailMap;
    }

    public get onNonCombatStatsChanged() {
        return this._onNonCombatStatsChanged.asEvent();
    }

    public get onEquipmentActionTypeBuffsChanged() {
        return this._onEquipmentActionTypeBuffsChanged.asEvent();
    }

    public updateNonCombatStats(nonCombatStats: NonCombatStats, notify: boolean = false) {
        this._nonCombatStats = nonCombatStats;
        if (notify) {
            this._onNonCombatStatsChanged.dispatch(this._nonCombatStats);
        }
    }

    public updateEquipmentActionTypeBuffs(
        equipmentActionTypeBuffs: Record<ActionTypeHrid, EquipmentActionTypeBuff>,
        notify: boolean = false
    ) {
        this._equipmentActionTypeBuffs = equipmentActionTypeBuffs;
        if (notify) {
            this._onEquipmentActionTypeBuffsChanged.dispatch(this._equipmentActionTypeBuffs);
        }
    }
}
