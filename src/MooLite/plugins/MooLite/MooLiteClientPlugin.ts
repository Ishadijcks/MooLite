import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { PluginConfig } from "src/MooLite/core/plugins/config/PluginConfig";
import { PluginConfigType } from "src/MooLite/core/plugins/config/PluginConfigType";
import { MooNotification } from "src/MooLite/core/notifications/MooNotification";
import { Game } from "src/MooLite/core/Game";
import { MooLiteTab } from "src/MooLite/core/plugins/MooLiteTab";
import MooLiteClientPluginDisplay from "src/MooLite/plugins/MooLite/MooLiteClientPluginDisplay.vue";
import { markRaw } from "vue";

export class MooLiteClientPlugin extends MooLitePlugin {
    name: string = "MooLite";
    key = "moolite";
    description: string = "Your favourite (milky) way to play!";

    _isEnabled: boolean = true;
    _canBeDisabled: boolean = false;

    tab: MooLiteTab = {
        pluginName: this.name,
        icon: "🐮",
        componentName: "MooLiteClientPluginDisplay",
        component: markRaw(MooLiteClientPluginDisplay),
    };

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
            name: "Info message notifications",
            description:
                "Show browser notifications when you gain an info message (such as levelling up)\nRemember to allow them in your browser",
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

    save(): Record<string, any> {
        return {
            key: "Wow this works so well",
        };
    }

    load(data: Record<string, any>) {
        console.log(data.test.test);
    }
}
