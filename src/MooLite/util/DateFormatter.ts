export class DateFormatter {
    public static toHHMM(date: Date): string {
        return `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
    }

    public static secondsToHHMMSS(totalSeconds: number): String {
        const totalMinutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);
        const hours = Math.floor(totalMinutes / 60);
        const minutes = Math.floor(totalMinutes % 60);
        return hours + "h " + minutes + "m " + seconds + "s";
    }
}
