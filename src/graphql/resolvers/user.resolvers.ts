import { IResolvers } from 'apollo-server-fastify';
import { UserRepository } from '../../repositories/user.repository';


export const userResolvers: IResolvers = {
    Query: {
        users: () => UserRepository.getUsers(),
        getUser: (userName: string) => UserRepository.getUser(userName)
    },
    Mutation: {
        createUser: (userName: string) => UserRepository.createUser(userName),
    }
};
