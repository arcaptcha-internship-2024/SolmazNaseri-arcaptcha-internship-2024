import { updateJsonDataById } from '../services/storage.js';

export async function updateDataById(request, reply) {
    try {
        const id = Number(request.params.id);
        const { updatedData = {}, sourceType = 'json' } = request.body || {};
        const result = await updateJsonDataById(id, updatedData);

        if (!result) {
            return reply.code(404).send({ message: 'Data not found' });
        }

        reply.code(200).send(result);
    } catch (error) {
        console.error('Error updating data:', error);
        reply.code(500).send({ message: 'Error updating data' });
    }
}