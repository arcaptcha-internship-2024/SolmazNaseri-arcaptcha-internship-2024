import Fastify from 'fastify';
import fs from 'fs';
import path from 'path';

const fastify = Fastify();
const filePath = path.join(process.cwd(), 'data.json');

const readData = () => {
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath);
        return JSON.parse(content) || [];
    }
    return [];
};

const createRecord = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

fastify.post('/api/submit', async(request, reply) => {
    try {
        const data = request.body;
        let jsonData = readData();
        jsonData.push(data);
        createRecord(jsonData);
        reply.code(200).send({ message: 'Data saved successfully' });
    } catch (error) {
        console.error('Error processing request:');
    }
});

fastify.get('/api/data', async(request, reply) => {
    try {
        const jsonData = readData();
        reply.code(200).send(jsonData);
    } catch (error) {
        console.error('Error fetching data:');
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
        console.error('Error fetching data:');
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

        reply.code(200).send({ message: 'Database updated successfully' });
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
        console.error('Error deleting Record:', error);
        reply.code(500).send({ message: 'Error deleting Record' });
    }
});

fastify.listen({ port: 4000, host: '127.0.0.1' }, (err, address) => {
    if (err) {
        console.error('Error starting server:', err);
        process.exit(1);
    }
    console.log(`Server is running on ${address}`);
});