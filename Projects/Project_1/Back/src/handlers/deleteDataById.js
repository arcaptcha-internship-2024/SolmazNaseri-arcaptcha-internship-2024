import { deleteJsonDataById } from '../services/storage.js';

export async function deleteDataById(request, reply) {
    try {
        const id = Number(request.params.id);
        const result = await deleteJsonDataById(id);

        if (!result) {
            return reply.code(404).send({ message: 'Record not found' });
        }

        reply.code(200).send(result);
    } catch (error) {
        console.error('Error deleting record:', error);
        reply.code(500).send({ message: 'Error deleting record' });
    }
}