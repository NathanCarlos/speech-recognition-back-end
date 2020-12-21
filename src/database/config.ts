import { createConnection } from 'typeorm';
import { config } from '../config';
import { ENTITIES } from '../models';

export const connection = createConnection({
    ...config.database,
    entities: ENTITIES
});
