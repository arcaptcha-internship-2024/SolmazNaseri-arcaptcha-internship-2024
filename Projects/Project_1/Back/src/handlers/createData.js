import { saveToJson } from '../services/storage.js';

const storage = {
    json: saveToJson,
};

export async function createData(request, reply) {
    try {
        const { data = {}, sourceType = 'json' } = request.body || {};
        if (!storage[sourceType]) {
            return reply.code(400).send({ message: `Storage source ${sourceType} not supported` });
        }
        const result = await storage[sourceType](data);
        reply.code(200).send(result);
    } catch (error) {
        console.error('Error processing request:', error);
        reply.code(500).send({ message: 'Error processing request' });
    }
}