/*
 * Case sensitivity:
 *  I coded with this assumption that output should be in capital letter format ( as the way exists in the expected)
 */

import {expect, test, describe} from '@jest/globals';
import {nameParser} from "./index";

describe("Test 1", () => {
    test("Split name strings into their respective parts", () => {
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

        expect(nameParser(names)).toMatchObject(expected);
    });
});
