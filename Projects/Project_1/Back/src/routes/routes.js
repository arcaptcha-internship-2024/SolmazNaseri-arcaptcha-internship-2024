import { readData, createRecord } from '../utils/files.js';

export default async function routes(fastify) {

    fastify.post('/api/submit', async(request, reply) => {
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
    });

    fastify.get('/api/data', async(request, reply) => {
        try {
            const jsonData = readData();
            reply.code(200).send(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
            reply.code(500).send({ message: 'Error fetching data' });
        }
    });

    fastify.get('/api/data/:id', async(request, reply) => {
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
    });

    fastify.put('/api/data/:id', async(request, reply) => {
        try {
            const id = Number(request.params.id);
            const updatedData = request.body;
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
    });

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