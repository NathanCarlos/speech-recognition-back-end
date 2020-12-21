import { getConnection } from 'typeorm';
import { User } from '../models/user.model';

export class UserRepository {

    static getUsers() {
        return getConnection().
        getRepository(User).find();
    }

    static getUser(userName: string) {
        return getConnection().
        getRepository(User).findOne({
            where: {
                userName: userName,
            }
        });
    }

    static createUser(userName: string) {
        return getConnection().
        getRepository(User).save(
            {
                userName: userName
            }
        )
    }

    static updateUser(user: Partial<User>) {
        return getConnection().
        getRepository(User).update({
            id: user.id
        }, user);
    }
}