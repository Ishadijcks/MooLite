import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { PluginConfig } from "src/MooLite/core/plugins/config/PluginConfig";
import { PluginConfigType } from "src/MooLite/core/plugins/config/PluginConfigType";
import { MooNotification } from "src/MooLite/core/notifications/MooNotification";
import { Game } from "src/MooLite/core/Game";
import { MooLiteTab } from "src/MooLite/core/plugins/MooLiteTab";
import MooLiteClientPluginDisplay from "src/MooLite/plugins/MooLite/MooLiteClientPluginDisplay.vue";
import { CSSProperties, markRaw } from "vue";
import { PluginAuthorCredits } from "src/MooLite/core/plugins/PluginAuthorCredits";
import { toTitleCase } from "src/MooLite/util/String";

const mooLiteDisplaySides = ["left", "right"] as const;
type MooLiteDisplaySide = (typeof mooLiteDisplaySides)[number];

export class MooLiteClientPlugin extends MooLitePlugin {
    name: string = "MooLite";
    key = "moolite";
    description: string = "Your favourite (milky) way to play!";

    _isEnabled: boolean = true;
    _canBeDisabled: boolean = false;

    credits: PluginAuthorCredits = {
        author: "Isha",
        maintainer: "Isha",
    };

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
    disable(): void {
        return;
    }

    enable(): void {
        this.setMooliteDisplaySide(this.getConfig("mooliteclient/display-side").value);
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
        {
            key: "mooliteclient/start-collapsed",
            name: "Collapse MooLite sidebar on launch",
            description: "Collapses the MooLite sidebar on launch",
            type: PluginConfigType.CheckBox,
            value: false,
        },
        {
            key: "mooliteclient/display-side",
            name: "MooLite display side",
            description: "Display MooLite on the left or the right",
            type: PluginConfigType.Choice,
            value: "right",
            options: mooLiteDisplaySides.map((side) => {
                return {
                    text: toTitleCase(side),
                    value: side,
                };
            }),
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

    onConfigChange(key: string, newValue: any): void {
        if (key === "mooliteclient/display-side") {
            this.setMooliteDisplaySide(newValue);
        }
    }

    private setMooliteDisplaySide(displaySide: MooLiteDisplaySide): void {
        const direction = displaySide === "right" ? "row" : "row-reverse";
        this.setFlexDirectionById("root", direction);
        this.setFlexDirectionById("moolite-container", direction);
    }

    private setFlexDirectionById(elementId: string, direction: CSSProperties["flex-direction"]) {
        const element = document.getElementById(elementId);

        if (!element || !direction) {
            return;
        }

        element.style.setProperty("flex-direction", direction);
    }
}
