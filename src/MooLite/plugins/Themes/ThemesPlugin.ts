import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { PluginConfig } from "src/MooLite/core/plugins/config/PluginConfig";
import { PluginConfigType } from "src/MooLite/core/plugins/config/PluginConfigType";
import { PluginAuthorCredits } from "src/MooLite/core/plugins/PluginAuthorCredits";
import { ThemeHrid } from "src/MooLite/plugins/Themes/ThemeHrid";

import strawberry from "./strawberry-kawa-chan.css?inline";
import mint from "./mint-kawa-chan.css?inline";
import banana from "./banana-kawa-chan.css?inline";
import fixChatButtonBorder from "./fix-chat-button-border.css?inline";

export class ThemesPlugin extends MooLitePlugin {
    name = "Themes";
    key = "themes";
    description = "Change the appearance of Milky Way Idle with various themes";

    credits: PluginAuthorCredits = {
        author: "Isha",
        maintainer: "Isha",
        contributors: ["Kawa-Chan"],
    };

    private readonly STYLE_ID: string = "moolite-theme";

    config: PluginConfig[] = [
        {
            type: PluginConfigType.Choice,
            name: "Theme",
            description: "Change the appearance of Milky Way Idle with various themes",
            key: "selected-theme",
            value: "default",
            options: [
                { text: "Default", value: ThemeHrid.Default },
                { text: "Strawberry by Kawa-Chan", value: ThemeHrid.Strawberry },
                { text: "Mint by Kawa-Chan", value: ThemeHrid.Mint },
                { text: "Banana by Kawa-Chan", value: ThemeHrid.Banana },
            ],
        },
        {
            key: "enable-fix-chat-button-border",
            name: "Fix chat button border",
            description: "Squares off the left edge of the chat button",
            type: PluginConfigType.CheckBox,
            value: true,
        },
    ];

    private readonly _themes: Record<ThemeHrid, string> = {
        [ThemeHrid.Default]: "",
        [ThemeHrid.Mint]: mint,
        [ThemeHrid.Strawberry]: strawberry,
        [ThemeHrid.Banana]: banana,
    };

    public get selectedTheme(): string {
        return this.getConfig("selected-theme").value;
    }

    private onThemeChanged(themeName: ThemeHrid) {
        if (!this.isEnabled) {
            return;
        }

        // And create a new style tag for the new one
        const theme = this._themes[themeName];
        this.addCss(this.STYLE_ID, theme);
    }

    private onEnableFixChatButtonBorderChanged(newValue: boolean) {
        if (!this.isEnabled) {
            return;
        }

        const styleId = `moolite-tweak-fix-chat-button-border`;
        newValue ? this.addCss(styleId, fixChatButtonBorder) : this.removeCss(styleId);
    }

    private addCss(styleId: string, css: string): void {
        // Remove any existing CSS for this ID to avoid duplicated. This is
        // preferable to checking and no-oping se we can overwrite the existing
        // style.
        this.removeCss(styleId);

        const style = document.createElement("style");
        style.setAttribute("id", styleId);
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    }

    private removeCss(styleId: string): void {
        const style = document.getElementById(styleId);
        if (style) {
            document.head.removeChild(style);
        }
    }

    enable() {
        super.enable();
        this.onThemeChanged(this.selectedTheme as ThemeHrid);
        this.onEnableFixChatButtonBorderChanged(this.getConfig("enable-fix-chat-button-border").value);
    }

    disable() {
        super.disable();
        this.onThemeChanged(ThemeHrid.Default);
        this.onEnableFixChatButtonBorderChanged(false);
    }

    public onConfigChange(key: string, newValue: any) {
        console.log({ key, newValue });
        switch (key) {
            case "selected-theme":
                this.onThemeChanged(newValue as ThemeHrid);
            case "enable-fix-chat-button-border":
                this.onEnableFixChatButtonBorderChanged(newValue);
        }
    }
}
