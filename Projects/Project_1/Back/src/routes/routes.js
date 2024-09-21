import { submitData } from '../utils/submitData.js';
import { getDataById } from '../utils/getDataById.js';
import { updateDataById } from '../utils/updateDataById.js';
import { deleteDataById } from '../utils/deleteDataById.js';

export default async function routes(fastify) {
    fastify.post('/api/submit', submitData);
    fastify.get('/api/data/:id', getDataById);
    fastify.put('/api/data/:id', updateDataById);
    fastify.delete('/api/data/:id', deleteDataById);
}