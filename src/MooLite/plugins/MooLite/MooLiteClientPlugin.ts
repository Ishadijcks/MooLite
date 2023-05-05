import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { PluginConfig } from "src/MooLite/core/plugins/config/PluginConfig";
import { PluginConfigType } from "src/MooLite/core/plugins/config/PluginConfigType";
import { MooNotification } from "src/MooLite/core/notifications/MooNotification";
import { Game } from "src/MooLite/core/Game";

export class MooLiteClientPlugin extends MooLitePlugin {
    name: string = "MooLite";
    key = "moolite";
    description: string = "Your favourite (milky) way to play!";

    _isEnabled: boolean = true;
    _canBeDisabled: boolean = false;

    initialize(game: Game) {
        super.initialize(game);
        Notification.requestPermission().then();
    }

    /**
     * Cannot be disabled
     */
    disable() {
        return;
    }

    config: PluginConfig[] = [
        {
            key: "mooliteclient/browser-notifications",
            name: "Browser notifications",
            description: "Show browser notifications\nRemember to allow them in your browser",
            type: PluginConfigType.CheckBox,
            value: true,
        },
        {
            key: "mooliteclient/notifications-in-chat",
            name: "Notifications in chat",
            description: "Show notifications in the chat",
            type: PluginConfigType.CheckBox,
            value: true,
        },
    ];

    public get showBrowserNotifications(): boolean {
        return this.getConfig("mooliteclient/browser-notifications")?.value;
    }

    onNotification(notification: MooNotification): void {
        if (this.showBrowserNotifications) {
            this._game.notifier.sendBrowserNotification(notification.message);
        }
    }
}
