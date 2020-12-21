import { ApolloServer } from 'apollo-server-fastify';
import * as fastify from 'fastify';
import { config } from './config';
import { connection } from './database/config';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/types';

const fastifyServerOptions: fastify.ServerOptions = {
    logger: false,
}

const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    introspection: true,
    playground: true
});

const app = fastify.default(fastifyServerOptions);

const startApplication = async () => {
    try {
        app.register(apolloServer.createHandler({
            path: config.graphqlPath
        }));
        const serverResult = await app.listen({
            port: config.port,
        });
        const connectionStatus = await connection;
        return `Application started with success, server: ${serverResult}, database: ${connectionStatus}`;
    } catch(err) {
        return `Application not started because: ${err}`;
    }
}

startApplication().then((result) => {
    console.log(result);
}).then((err) => {
    console.log(err);
});
