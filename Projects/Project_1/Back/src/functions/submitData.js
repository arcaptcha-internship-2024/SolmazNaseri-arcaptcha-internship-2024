import { readData, createRecord } from '../utils/files.js';

async function saveToJson(data) {
    let jsonData = readData();
    jsonData.push(data);
    createRecord(jsonData);
    return { message: 'Data saved successfully' };
}

const storage = {
    json: saveToJson, //for now
};

export async function submitData(request, reply) {
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