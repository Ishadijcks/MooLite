import { DropTableLoot } from "src/MooLite/core/combat/DropTable";
import { ActionDetail } from "src/MooLite/core/actions/ActionDetail";

export interface ItemFoundInActionDropTable {
    action: ActionDetail;
    loot: DropTableLoot;
}
