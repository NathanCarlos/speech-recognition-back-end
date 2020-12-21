import { ConnectionOptions } from 'typeorm';

export interface ApplicationConfig {
    host: string;
    port: number;
    graphqlPath: string;
    database: ConnectionOptions;
}

export const config: ApplicationConfig = {
    host: 'localhost',
    port: 3000,
    graphqlPath: '/graphql',
    database: {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'speech_recognition',
        synchronize: false,
        logging: true
    }
}
