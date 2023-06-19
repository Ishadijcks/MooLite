import { Component } from "vue";

export interface MooLiteTab {
    icon: string;

    // Must match the name of the plugin this tab belongs to
    pluginName: string;

    // The name under which the component will be registered
    componentName: string;

    // Must be wrapped with markRaw()
    component: Component;

    /** Expects a tailwind width class. */
    width?: "w-32" | "w-36" | "w-40" | "w-44" | "w-48" | "w-52" | "w-56" | "w-60" | "w-64" | "w-72" | "w-80" | "w-96" | `w-[${string}${"em" | "rem" | "px" | "%"}]`;
}
