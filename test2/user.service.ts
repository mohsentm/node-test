import {User} from "./user.entity";
import {UserRepositoryInterface} from "./user.repository.interface";

export class UsersService {
    constructor(private readonly usersRepository: UserRepositoryInterface) {
    }

    async getUsers(): Promise<User[]> {
        const userIDs: number[] = await this.usersRepository.listUserIDs();

        return await Promise.all(userIDs.map(async (userID: number): Promise<User | null> => {
            const userEntity = await this.usersRepository.getUser(userID);
            userEntity.friends = await this.attachFriends(userEntity.friends as number[]);
            return userEntity;
        }));
    }

    async attachFriends(friendIDs: number[]): Promise<User[]> {
        return await Promise.all(friendIDs.map(async (friendID: number): Promise<User | null> => {
            return await this.usersRepository.getUser(friendID);
        }));
    }
}