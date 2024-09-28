import { readData, createRecord } from '../orm/files.js';

export async function deleteDataById(request, reply) {
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
}