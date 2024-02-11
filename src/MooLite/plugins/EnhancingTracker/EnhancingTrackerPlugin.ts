import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { MooLiteTab } from "src/MooLite/core/plugins/MooLiteTab";
import EnhancingTrackerPluginDisplay from "src/MooLite/plugins/EnhancingTracker/EnhancingTrackerPluginDisplay.vue";
import { markRaw } from "vue";
import { PluginAuthorCredits } from "src/MooLite/core/plugins/PluginAuthorCredits";
import { ItemDetail } from "src/MooLite/core/inventory/items/ItemDetail";
import { ItemHrid } from "src/MooLite/core/inventory/ItemHrid";
import { CharacterAction } from "src/MooLite/core/actions/CharacterAction";
import { ItemHashParts, decodeItemHash } from "src/MooLite/core/inventory/items/decodeItemHash";
import { ItemAmount } from "src/MooLite/core/inventory/items/ItemAmount";
import { ActionHrid } from "src/MooLite/core/actions/ActionHrid";

export class EnhancingTrackerPlugin extends MooLitePlugin {
    name: string = "Enhancing Tracker";
    key = "enhancing-tracker";
    description: string = "Tracks materials consumed during enhancing.";

    credits: PluginAuthorCredits = {
        author: "seashairo",
        maintainer: "seashairo",
    };

    tab: MooLiteTab = {
        icon: "⭐",
        pluginName: this.name,
        componentName: "EnhancingTrackerPluginDisplay",
        component: markRaw(EnhancingTrackerPluginDisplay),
    };

    public get itemDetailMap(): Record<ItemHrid, ItemDetail> {
        return this._game.inventory.itemDetailMap;
    }

    itemBeingEnhancedHrid: ItemHrid | null = null;
    itemsConsumed: Record<ItemHrid, number> = {};
    bestEnhancementLevel: number = 0;
    successes: number = 0;
    failures: number = 0;
    blessedTeaProcs: number = 0;
    itemState: ItemHashParts | null = null;
    previousAction: CharacterAction | null = null;

    public get successRate(): number {
        const attempts = this.successes + this.failures;
        return attempts === 0 ? 0 : (this.successes / attempts) * 100;
    }

    onActionQueueUpdated(queue: CharacterAction[]): void {
        const currentAction = queue.length ? queue[0] : null;

        const enhancing = "/actions/enhancing/enhance" as unknown as ActionHrid;
        const currentActionIsEnhancing = currentAction?.actionHrid === enhancing;
        const previousActionIsEnhancing = this.previousAction?.actionHrid === enhancing;

        if (currentActionIsEnhancing) {
            previousActionIsEnhancing
                ? this.handleEnhancing(currentAction)
                : this.handleStartedEnhancing(currentAction);
        }

        this.previousAction = currentAction;
    }

    handleStartedEnhancing(currentAction: CharacterAction): void {
        const itemHashParts = decodeItemHash(currentAction.upgradeItemHash);
        this.itemState = itemHashParts;
        this.itemBeingEnhancedHrid = itemHashParts.itemHrid;
        this.bestEnhancementLevel = itemHashParts.enhancementLevel;
        this.itemsConsumed = {};
    }

    addConsumedItem(itemAmount: ItemAmount): void {
        itemAmount.itemHrid in this.itemsConsumed
            ? (this.itemsConsumed[itemAmount.itemHrid] += itemAmount.count)
            : (this.itemsConsumed[itemAmount.itemHrid] = itemAmount.count);
    }

    handleEnhancing(currentAction: CharacterAction): void {
        const currentItemState = decodeItemHash(currentAction.upgradeItemHash);
        const itemBeingEnhancedHrid = currentItemState.itemHrid;

        // If the item being enhanced has changed hrid, then we're enhancing
        // something new.
        //
        // TODO: Handle this more gracefully. Maybe store a dict of enhancing
        // data against hrid to display a table?
        if (this.itemBeingEnhancedHrid !== itemBeingEnhancedHrid) {
            return this.handleStartedEnhancing(currentAction);
        }

        // Instead of watching the items gained and lost, we want to use the
        // item's enhancement cost. This is because players using the market
        // will hit the onItemGained handler and leave the count inaccurate.
        //
        // TODO: When Blessed Tea procs, do you use 1 or 2 sets of consumables?
        // If it's 1 then this is accurate, but if it's 2 then this logic would
        // need to be part of the level check below
        const enhancingCosts = this._game.inventory.itemDetailMap[itemBeingEnhancedHrid].enhancementCosts;
        enhancingCosts!.forEach((itemAmount) => this.addConsumedItem(itemAmount));

        const itemState = this.itemState!;
        if (currentItemState.enhancementLevel > itemState.enhancementLevel) {
            const diff = currentItemState.enhancementLevel - itemState.enhancementLevel;
            this.successes += 1;
            // I'm pretty sure the level diff will only ever be 1 or 2, but just
            // in case blessed tea can multi-proc we'll check for anything
            // greater than 1. I'm also assuming (but haven't confirmed) that a
            // blessed tea proc will still be in a single action update and not
            // two separate ones.
            if (diff > 1) {
                this.blessedTeaProcs += 1;
            }
        } else {
            this.failures += 1;

            // Protections don't get counted in the regular consumed items
            // report, so if we drop an enhancement level then we need to
            // manually count a lost protection.
            const protectionHash = currentAction.enhancingProtectionItemHash;
            if (protectionHash !== "" && itemState.enhancementLevel >= currentAction.enhancingProtectionItemMinLevel) {
                const itemHrid = decodeItemHash(protectionHash).itemHrid;
                this.addConsumedItem({ itemHrid, count: 1 });
            }
        }

        this.bestEnhancementLevel = Math.max(currentItemState.enhancementLevel, this.bestEnhancementLevel);

        this.itemState = currentItemState;
    }
}
