import controler from '../handlers/index.js';

export default async function routes(fastify) {
    fastify.register(async function(instance) {
        instance.post('/data', controler.createData);
        instance.get('/data/:id', controler.getDataById);
        instance.put('/data/:id', controler.updateDataById);
        instance.delete('/data/:id', controler.deleteDataById);
    }, { prefix: '/api' });
}