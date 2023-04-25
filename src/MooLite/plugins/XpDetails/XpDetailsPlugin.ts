import {MooLitePlugin} from "src/MooLite/plugins/MooLitePlugin";
import {SkillInfo} from "src/MooLite/core/skills/SkillInfo";

export class XpDetailsPlugin extends MooLitePlugin {
    name: string = "Xp Details";


    onXpGained(info: SkillInfo) {
        console.log("Gained xp", info.experience)
    }
}
