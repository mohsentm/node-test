/*
 * BUG: Invalid user ID defined in the expected data.
 *      There was a user with ID 350 which doesn't exist. I replaced the ID with correct one (123)
 *      I added an extra test for covering the not found exception
 *
 *  Assumption:
 *    I coded with this assumption that I should use getUser and listUserIDs methods for fetching the data
 *    ( and I can't  GetMany and other ORM relation features for fetch and map the data)
 */
import {expect, test, describe} from '@jest/globals';
import {User} from "./user.entity";
import {UsersService} from "./user.service";

describe("Test 2", () => {
    const database = class<UserRepositoryInterface> {
        async getUser(id: number): Promise<User | null> {
            const data = {
                621: {id: 621, name: "XxDragonSlayerxX", friends: [123, 251, 631]},
                123: {id: 123, name: "FriendNo1", friends: [621, 631]},
                251: {id: 251, name: "SecondBestFriend", friends: [621]},
                631: {id: 631, name: "ThirdWh33l", friends: [621, 123, 251]},
            };
            return new Promise((res, rej) => {
                setTimeout(() => {
                    data[id] ? res(data[id]) : rej(new Error("not_found"));
                }, 300);
            })
        }

        async listUserIDs(): Promise<number[]> {
            return new Promise((res) => res([621, 123, 251, 631]));
        }
    }

    test("Test fetch users and populate all of their friends", async () => {
        const expected = [
            {
                id: 621,
                name: "XxDragonSlayerxX",
                friends: [
                    {id: 123, name: "FriendNo1", friends: [621, 631]},
                    {id: 251, name: "SecondBestFriend", friends: [621]},
                    {id: 631, name: "ThirdWh33l", friends: [621, 123, 251]},
                ],
            },
            {
                id: 123,
                name: "FriendNo1",
                friends: [
                    {id: 621, name: "XxDragonSlayerxX", friends: [123, 251, 631]},
                    {id: 631, name: "ThirdWh33l", friends: [621, 123, 251]},
                ],
            },
            {
                id: 251,
                name: "SecondBestFriend",
                friends: [{id: 621, name: "XxDragonSlayerxX", friends: [123, 251, 631]}],
            },
            {
                id: 631,
                name: "ThirdWh33l",
                friends: [
                    {id: 621, name: "XxDragonSlayerxX", friends: [123, 251, 631]},
                    {id: 123, name: "FriendNo1", friends: [621, 631]},
                    {id: 251, name: "SecondBestFriend", friends: [621]},
                ],
            },
        ];
        // expect.assertions(1);
        const userService = new UsersService(new database());
        await expect(userService.getUsers()).resolves.toMatchObject(expected)
    });

    test("Test not found user", async () => {
        const database2 = class<UserRepositoryInterface> extends database<UserRepositoryInterface> {
            async listUserIDs(): Promise<number[]> {
                // Returns invalid user ID
                return new Promise((res) => res([11]));
            }
        }
        expect.assertions(1);
        const userService = new UsersService(new database2());
        await expect(userService.getUsers()).rejects.toThrowError(Error)
    });
})
