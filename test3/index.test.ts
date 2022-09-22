/*
 * BUG: Invalid position number (-1). {a: ["A", -1], b: ["B", 1]}
 *      I coded with this assumption that input parameters were validated therefore I didn't add position validate
 *
 * REFACTOR: Since you mentioned that I could refactor freely, I refactored the positions variable structure as well
 *
 * Other solution: Instead of using enum value for positions,
 *                 could accept the number and letter as a position and then use letter ASCII code for calculation
 *                  ( I used this solution at GoLang test)
 */


import {expect, test, describe} from '@jest/globals';
import {canAttack, FilePosition, RankPosition} from "./index";

describe("Test 2", () => {
    test("Validate if two knights in a game of chess can attack each other based on their position.", () => {
        const positions = [
            {
                a: {rank: RankPosition.C, file: FilePosition.TWO},
                b: {rank: RankPosition.D, file: FilePosition.FOUR},
                canAttack: true
            },
            {
                a: {rank: RankPosition.F, file: FilePosition.SEVEN},
                b: {rank: RankPosition.E, file: FilePosition.FIVE},
                canAttack: true
            },
            {
                a: {rank: RankPosition.C, file: FilePosition.TWO},
                b: {rank: RankPosition.A, file: FilePosition.ONE},
                canAttack: true
            },
            {
                a: {rank: RankPosition.A, file: FilePosition.SIX},
                b: {rank: RankPosition.B, file: FilePosition.FOUR},
                canAttack: true
            },
            {
                a: {rank: RankPosition.A, file: FilePosition.SIX},
                b: {rank: RankPosition.B, file: FilePosition.FIVE},
                canAttack: false
            },
            {
                a: {rank: RankPosition.C, file: FilePosition.TWO},
                b: {rank: RankPosition.C, file: FilePosition.TWO},
                canAttack: false
            },
            {
                a: {rank: RankPosition.D, file: FilePosition.FOUR},
                b: {rank: RankPosition.E, file: FilePosition.FIVE},
                canAttack: false
            },
        ];

        positions.forEach((test) => {
            expect(canAttack(test.a, test.b)).toEqual(!!test.canAttack);
        });
    });
});
