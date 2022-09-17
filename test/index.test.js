import chai from 'chai';
import nameParser from "../src/test1/index.js";

const assert = chai.assert;

describe('Test 1', function () {
    it('Split name strings into their respective parts', function () {
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

        assert.deepEqual(nameParser(names), expected);
    });
});
