const nameParser = (names) => names.map((fullName) => {
    const fullNameList = fullName.split(" ").map((name) => toUpperCaseFirst(name));

    return {
        first: fullNameList.shift(),
        last: fullNameList.pop() ?? null,
        middle: fullNameList
    }
});

const toUpperCaseFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export default nameParser;