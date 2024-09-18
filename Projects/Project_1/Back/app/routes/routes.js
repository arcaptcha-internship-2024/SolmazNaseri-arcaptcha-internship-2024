import { submitData } from '../functions/submitData.js';
import { getDataById } from '../functions/getDataById.js';
import { updateDataById } from '../functions/updateDataById.js';
import { deleteDataById } from '../functions/deleteDataById.js';

export default async function routes(fastify) {
    fastify.post('/api/submit', submitData);
    fastify.get('/api/data/:id', getDataById);
    fastify.put('/api/data/:id', updateDataById);
    fastify.delete('/api/data/:id', deleteDataById);
}