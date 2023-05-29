export class Math {
    public static multiplyArray(numbers: number[]): number {
        let result = 1;
        for (let num in numbers) {
            result = result * numbers[num];
        }
        return result;
    }
    public static sumArray(numbers: number[]): number[] {
        let sumTable = [];
        for (let i = 0; i < numbers.length; i++) {
            sumTable.push(numbers.slice(0, i + 1).reduce((a, b) => a + b, 0));
        }
        return sumTable;
    }
}
