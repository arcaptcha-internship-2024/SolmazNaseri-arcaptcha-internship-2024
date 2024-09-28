import controler from '../controler/index.js';

export default async function routes(fastify) {
    fastify.post('/api/data', controler.createData);
    fastify.get('/api/data/:id', controler.getDataById);
    fastify.put('/api/data/:id', controler.updateDataById);
    fastify.delete('/api/data/:id', controler.deleteDataById);
}