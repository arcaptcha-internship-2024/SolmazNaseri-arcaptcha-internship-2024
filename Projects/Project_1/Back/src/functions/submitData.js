import { readData, createRecord } from '../utils/files.js';

export async function submitData(request, reply) {
    try {
        const data = request.body;
        let jsonData = readData();
        jsonData.push(data);
        createRecord(jsonData);

        reply.code(200).send({ message: 'Data saved successfully' });
    } catch (error) {
        console.error('Error processing request:', error);

        reply.code(500).send({ message: 'Error processing request' });
    }
}