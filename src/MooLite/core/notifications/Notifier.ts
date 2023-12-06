import { SimpleEventDispatcher } from "strongly-typed-events";
import { MooNotification } from "src/MooLite/core/notifications/MooNotification";
import { NotificationType } from "src/MooLite/core/notifications/NotificationType";
import { InfoMessage } from "../messages/server/messages/Info";

export class Notifier {
    private _onNotification = new SimpleEventDispatcher<MooNotification>();

    public get onNotification() {
        return this._onNotification.asEvent();
    }

    processServerInfo(info: InfoMessage) {
        this._onNotification.dispatch({
            message: info.message,
            type: NotificationType.Info,
        });
    }

    sendBrowserNotification(title: string, options: NotificationOptions = {}) {
        const notification = new Notification(title, options);
    }
}
