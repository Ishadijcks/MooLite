export interface PluginAuthorCredits {
    // The original creator of the plugin, this can never change.
    author: string;

    // The current developer of the plugin and the one responsible for bugfixes.
    maintainer: string;

    // Anyone who ever did anything to aid this plugin, add your own name here when you fix something.
    contributors?: string[];
}
