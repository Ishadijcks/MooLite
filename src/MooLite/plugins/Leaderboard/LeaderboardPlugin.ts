import {markRaw} from "vue";
import {MooLitePlugin} from "src/MooLite/core/plugins/MooLitePlugin";
import {MooLiteTab} from "src/MooLite/core/plugins/MooLiteTab";
import LeaderboardPluginDisplay from "src/MooLite/plugins/Leaderboard/LeaderboardPluginDisplay.vue";
import {LeaderboardPlayerSummary} from "src/MooLite/core/leaderboard/LeaderboardPlayerSummary";

export class LeaderboardPlugin extends MooLitePlugin {
    name: string = "Leaderboard";
    key = "leaderboard";
    description: string = "See how you stack against other players";
    _isEnabled: boolean = true;

    tab: MooLiteTab = {
        icon: '🏆',
        pluginName: this.name,
        componentName: "LeaderboardPluginDisplay",
        component: markRaw(LeaderboardPluginDisplay),
    };

    public get hasData(): boolean {
        return this._game.leaderboard.lastUpdated != null;
    }

    public get lastUpdated(): Date | null {
        return this._game.leaderboard.lastUpdated;
    }

    getPlayerSummary(name: string): LeaderboardPlayerSummary | null {
        return this._game.leaderboard.getPlayerSummary(name);
    }
}
