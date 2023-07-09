import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { PluginConfig } from "src/MooLite/core/plugins/config/PluginConfig";
import { PluginConfigType } from "src/MooLite/core/plugins/config/PluginConfigType";
import { PluginAuthorCredits } from "src/MooLite/core/plugins/PluginAuthorCredits";
import { ThemeHrid } from "src/MooLite/plugins/Themes/ThemeHrid";

import strawberry from "./strawberry-kawa-chan.css?inline";
import mint from "./mint-kawa-chan.css?inline";
import banana from "./banana-kawa-chan.css?inline";

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

    public onThemeChanged(themeName: ThemeHrid) {
        // Clear the previous style
        const previousStyle = document.getElementById(this.STYLE_ID);
        if (previousStyle) {
            document.head.removeChild(previousStyle);
        }

        // And create a new style tag for the new one
        const theme = this._themes[themeName];
        const style = document.createElement("style");
        style.setAttribute("id", this.STYLE_ID);
        style.appendChild(document.createTextNode(theme));
        document.head.appendChild(style);
    }

    enable() {
        super.enable();
        this.onThemeChanged(this.selectedTheme as ThemeHrid);
    }

    disable() {
        super.disable();
        this.onThemeChanged(ThemeHrid.Default);
    }

    public onConfigChange(key: string, newValue: any) {
        switch (key) {
            case "selected-theme":
                this.onThemeChanged(newValue as ThemeHrid);
        }
    }
}
