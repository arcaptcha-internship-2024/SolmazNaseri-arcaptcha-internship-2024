import { submitData } from './submitData.js';
import { getDataById } from './getDataById.js';
import { updateDataById } from './updateDataById.js';
import { deleteDataById } from './deleteDataById.js';

export default async function routes(fastify) {
    fastify.post('/api/submit', submitData);
    fastify.get('/api/data/:id', getDataById);
    fastify.put('/api/data/:id', updateDataById);
    fastify.delete('/api/data/:id', deleteDataById);



}