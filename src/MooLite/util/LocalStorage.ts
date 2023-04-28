import {MooLiteSaveData} from "src/MooLite/core/MooLiteSaveData";

export class LocalStorage {
    private static readonly SAVE_KEY = "MooLite";

    public static store(data: MooLiteSaveData): void {
        const saveString = JSON.stringify(data);
        localStorage.setItem(this.SAVE_KEY, saveString);
    }

    public static get(): MooLiteSaveData {
        const saveString = localStorage.getItem(this.SAVE_KEY) as string;
        return JSON.parse(saveString) as MooLiteSaveData
    }
}
