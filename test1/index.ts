export type ParsedName = {
    first: string | null;
    middle: string[];
    last: string | null;
}

export const nameParser = (names: string[]): Array<ParsedName> => names.map((fullName: string): ParsedName => {
    const fullNameList: string[] = fullName.split(" ").map((name: string) => toUpperCaseFirst(name));

    return {
        first: fullNameList.shift(),
        last: fullNameList.pop() ?? null,
        middle: fullNameList
    }
});

const toUpperCaseFirst = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
