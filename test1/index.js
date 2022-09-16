const nameParser = (names) => names.map((fullName) => {
    const fullNameList = fullName.split(" ").map((name) => toUpperCaseFirst(name));
    return {
        first: fullNameList[0],
        middle: fullNameList.filter((value, index) => {
            return fullNameList.length > 0 && index > 0 && index < fullNameList.length - 1
        }),
        last: fullNameList.length > 1 ? fullNameList[fullNameList.length - 1] : null
    }
});

const toUpperCaseFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export default nameParser;