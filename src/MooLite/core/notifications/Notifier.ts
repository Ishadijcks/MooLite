import {InfoMessage} from "src/MooLite/core/server/messages/Info";
import {SimpleEventDispatcher} from "strongly-typed-events";
import {MooNotification} from "src/MooLite/core/notifications/MooNotification";
import {NotificationType} from "src/MooLite/core/notifications/NotificationType";

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

    sendBrowserNotification(title: string, options: NotificationOptions) {
        const notification = new Notification(title, options);
    }
}
