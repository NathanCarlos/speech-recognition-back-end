import { gql } from 'apollo-server-fastify';

export const typeDefs = gql`
    type Query {
        items: [Item!]!
        item: Item,
        hello: String!
    }
    type Item {
        id: ID!
        name: String!
        message: String!
    }
`;

export const resolvers = {
    Query: {
        hello: () => 'Hello World',
        items: () => {
        return [{
        id: 1,
        name: 'test',
        message: 'test111'
      }]
    },
    }
};
