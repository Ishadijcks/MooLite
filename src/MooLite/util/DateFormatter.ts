export class DateFormatter {
    public static toHHMM(date: Date): string {
        return `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
    }
}
