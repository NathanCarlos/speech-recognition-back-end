import { gql } from 'apollo-server-fastify';

export const userType = gql`
    type User {
        id: ID!
        userName: String!
        isActive: Boolean!
    }
    type Query {
        users: [User!]!
    }
    type Mutation {
        createUser(userName: String!): User!
    }
`;