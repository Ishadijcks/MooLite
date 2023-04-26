import {MooLitePlugin} from "src/MooLite/plugins/MooLitePlugin";
import {XpGained} from "src/MooLite/core/skills/Skills";

export class XpDetailsPlugin extends MooLitePlugin {
    name: string = "Xp Details";


    onXpGained(xpGained: XpGained) {
        console.log(`Gained ${xpGained.delta} ${xpGained.skillHrid} xp (${xpGained.experience} total)`);
    }
}
