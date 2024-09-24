import { readData } from '../orm/files.js';

async function getJsonDataById(id) {
    const jsonData = readData();
    return jsonData.find((entry, index) => index === id);
}

const storage = {
    json: getJsonDataById,
};

export async function getDataById(request, reply) {
    try {
        const id = Number(request.params.id);
        const { sourceType = 'json' } = request.query || {};
        if (!storage[sourceType]) {
            return reply.code(400).send({ message: `Storage source ${sourceType} not supported` });
        }
        const item = await storage[sourceType](id);

        if (!item) {
            return reply.code(404).send({ message: 'Data not found' });
        }

        reply.code(200).send(item);
    } catch (error) {
        console.error('Error fetching data:', error);
        reply.code(500).send({ message: 'Error fetching data' });
    }
}