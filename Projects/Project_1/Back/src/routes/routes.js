import handlers from '../handler/index.js';

export default async function routes(fastify) {
    fastify.post('/api/data', handlers.createData);
    fastify.get('/api/data/:id', handlers.getDataById);
    fastify.put('/api/data/:id', handlers.updateDataById);
    fastify.delete('/api/data/:id', handlers.deleteDataById);
}