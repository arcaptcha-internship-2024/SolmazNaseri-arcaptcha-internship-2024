import { readData, createRecord } from '../orm/files.js';

export async function updateDataById(request, reply) {
    try {
        const id = Number(request.params.id);

        const { updatedData = {}, sourceType = 'json' } = request.body || {};
        let jsonData = readData();

        if (id >= jsonData.length) {
            return reply.code(404).send({ message: 'Data not found' });
        }

        jsonData[id] = updatedData;
        createRecord(jsonData);

        reply.code(200).send({ message: 'Data updated successfully' });
    } catch (error) {
        console.error('Error updating data:', error);
        reply.code(500).send({ message: 'Error updating data' });
    }
}