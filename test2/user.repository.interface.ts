import {User} from "./user.entity";

export interface UserRepositoryInterface {

     getUser(id: number): Promise<User | null>;

     listUserIDs(): Promise<number[]>;
}
