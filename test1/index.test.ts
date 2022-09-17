import {nameParser, ParsedName} from "./index";

describe("Test 1", () => {
    it("Split name strings into their respective parts", () => {
        const names = [
            "Michael Daniel Jäger",
            "LINUS HARALD christer WAHLGREN",
            "Pippilotta Viktualia Rullgardina Krusmynta Efraimsdotter LÅNGSTRUMP",
            "Kalle Anka",
            "Ghandi",
        ];

        const expected = [
            {first: "Michael", middle: ["Daniel"], last: "Jäger"},
            {first: "Linus", middle: ["Harald", "Christer"], last: "Wahlgren"},
            {
                first: "Pippilotta",
                middle: ["Viktualia", "Rullgardina", "Krusmynta", "Efraimsdotter"],
                last: "Långstrump",
            },
            {first: "Kalle", middle: [], last: "Anka"},
            {first: "Ghandi", middle: [], last: null},
        ];

        expect(nameParser(names)).toMatchObject<Array<ParsedName>>(expected);
    });
});
