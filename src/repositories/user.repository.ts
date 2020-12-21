import { Connection, getConnection } from 'typeorm';
import { User } from '../models/user.model';

export class UserRepository {

    private connection: Connection;

    constructor() {
        this.connection = getConnection();
    }

    getUsers() {
        return this.connection.getRepository(User).find();
    }

    getUser(userName: string) {
        return this.connection.getRepository(User).findOne({
            where: {
                userName: userName,
            }
        });
    }

    createUser(userName: string) {
        return this.connection.getRepository(User).create(
            {
                userName: userName
            }
        )
    }

    updateUser(user: Partial<User>) {
        return this.connection.getRepository(User).update({
            id: user.id
        }, user);
    }
}