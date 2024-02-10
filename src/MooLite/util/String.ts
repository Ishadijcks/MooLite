/**
 * Converts an input string to title case.
 *
 * e.g.
 * `word` => `Word`
 * `small text` => `Small Text`
 *
 * @param input string to format to title case
 * @returns the input string formatted to title case
 */
export function toTitleCase(input: string): string {
    return input.replace(/\w\S*/g, (part) => {
        return part.charAt(0).toUpperCase() + part.substr(1).toLowerCase();
    });
}
