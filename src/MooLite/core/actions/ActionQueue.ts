import {CharacterAction} from "src/MooLite/core/actions/CharacterAction";

export class ActionQueue {
    private _actions: CharacterAction[] = [];


    public updateActions(actions: CharacterAction[]): void {
        actions.forEach(newAction => {
            const actionInQueue = this._actions.find(action => {
                return action.id === newAction.id;
            });

            // If not in the queue, add it and we're done
            if (!actionInQueue) {
                this._actions.push(newAction)
                return;
            }

            const index = this._actions.indexOf(actionInQueue);

            // If we have it, and it's done, we must remove it
            if (newAction.isDone) {
                this._actions.splice(index, 1);
                return;
            }

            // Otherwise just update it
            this._actions[index] = newAction
        })

        console.log(this._actions.map(action => {
            const actionSplit = action.actionHrid.toString().split("/");
            const actionName = actionSplit[actionSplit.length - 1];
            return `${actionName} (${((action.hasMaxCount ? action.maxCount : Infinity) - action.currentCount)})`
        }).join(", "))
    }

}
