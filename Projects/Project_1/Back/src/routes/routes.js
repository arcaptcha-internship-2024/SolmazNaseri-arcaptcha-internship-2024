import { readData, createRecord } from '../utils/files.js';
import { submitData } from './submitData.js';
import { getDataById } from './getDataById.js';
import { updateDataById } from '../functions/updateDataById.js';

export default async function routes(fastify) {
    fastify.post('/api/submit', submitData);
    fastify.get('/api/data/:id', getDataById);
    fastify.put('/api/data/:id', updateDataById);

    fastify.delete('/api/data/:id', async(request, reply) => {
        try {
            const id = Number(request.params.id);
            let jsonData = readData();

            if (id >= jsonData.length) {
                return reply.code(404).send({ message: 'Record not found' });
            }

            jsonData.splice(id, 1);
            createRecord(jsonData);

            reply.code(200).send({ message: 'Record deleted successfully' });
        } catch (error) {
            console.error('Error deleting record:', error);
            reply.code(500).send({ message: 'Error deleting record' });
        }
    });
}