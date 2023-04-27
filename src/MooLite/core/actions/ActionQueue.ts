import {CharacterAction} from "src/MooLite/core/actions/CharacterAction";
import {SimpleEventDispatcher} from "strongly-typed-events";

export class ActionQueue {
    private _actions: CharacterAction[] = [];


    private _onActionQueueUpdated = new SimpleEventDispatcher<CharacterAction[]>();

    public get onActionQueueUpdated() {
        return this._onActionQueueUpdated.asEvent();
    }

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

        this._onActionQueueUpdated.dispatch(this._actions);
    }

}
