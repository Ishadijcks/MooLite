import { CharacterAction } from "src/MooLite/core/actions/CharacterAction";
import { SimpleEventDispatcher } from "strongly-typed-events";
import { ActionHrid } from "src/MooLite/core/actions/ActionHrid";
import { ActionDetail } from "src/MooLite/core/actions/ActionDetail";
import { ActionCategoryHrid } from "src/MooLite/core/actions/ActionCategoryHrid";
import { ActionCategoryDetail } from "src/MooLite/core/actions/ActionCategoryDetail";

export class ActionQueue {
    private _characterActions: CharacterAction[] = [];

    private _onActionQueueUpdated = new SimpleEventDispatcher<CharacterAction[]>();

    public get onActionQueueUpdated() {
        return this._onActionQueueUpdated.asEvent();
    }

    public readonly actionDetailMap: Record<ActionHrid, ActionDetail>;
    public readonly actionCategoryDetailMap: Record<ActionCategoryHrid, ActionCategoryDetail>;

    public readonly actionDetailList: ActionDetail[];

    constructor(
        actionDetailMap: Record<ActionHrid, ActionDetail>,
        actionCategoryDetailMap: Record<ActionCategoryHrid, ActionCategoryDetail>
    ) {
        this.actionDetailMap = actionDetailMap;
        this.actionCategoryDetailMap = actionCategoryDetailMap;
        this.actionDetailList = Object.values(this.actionDetailMap).sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
    }

    public updateActions(actions: CharacterAction[]): void {
        actions.forEach((newAction) => {
            const actionInQueue = this._characterActions.find((action) => {
                return action.id === newAction.id;
            });

            // If not in the queue, add it and we're done
            if (!actionInQueue) {
                this._characterActions.push(newAction);
                return;
            }

            const index = this._characterActions.indexOf(actionInQueue);

            // If we have it, and it's done, we must remove it
            if (newAction.isDone) {
                this._characterActions.splice(index, 1);
                return;
            }

            // Otherwise just update it
            this._characterActions[index] = newAction;
        });

        this._onActionQueueUpdated.dispatch(this._characterActions);
    }
}
