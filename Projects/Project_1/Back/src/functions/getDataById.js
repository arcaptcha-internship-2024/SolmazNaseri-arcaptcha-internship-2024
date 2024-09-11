import { readData } from '../utils/files.js';

export async function getDataById(request, reply) {
    try {
        const id = Number(request.params.id);
        const jsonData = readData();
        const item = jsonData.find((entry, index) => index === id);

        if (!item) {
            return reply.code(404).send({ message: 'Data not found' });
        }

        reply.code(200).send(item);
    } catch (error) {
        console.error('Error fetching data:', error);
        reply.code(500).send({ message: 'Error fetching data' });
    }
}