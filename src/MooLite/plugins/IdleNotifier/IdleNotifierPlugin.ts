import {MooLitePlugin} from "src/MooLite/core/plugins/MooLitePlugin";
import {CharacterAction} from "src/MooLite/core/actions/CharacterAction";

export class IdleNotifierPlugin extends MooLitePlugin {
    name: string = "Idle Notifier";
    key = "idle-notifier";
    description: string = "Notifies you when your action queue is empty";

    onActionQueueUpdated(queue: CharacterAction[]) {
        if (queue.length === 0) {
            this._game.notifier.sendBrowserNotification("You are idle")
        }
    }
}
