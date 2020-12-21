import { IResolvers } from 'apollo-server-fastify';
import { User } from '../../models/user.model';
import { UserRepository } from '../../repositories/user.repository';


export const userResolvers: IResolvers = {
    Query: {
        users: () => UserRepository.getUsers(),
    },
    Mutation: {
        createUser: (userName: string) => UserRepository.createUser(userName),
    }
};
