import Fastify from 'fastify';
import routes from './routes/routes.js';

const fastify = Fastify();

fastify.register(routes);

fastify.listen({ port: 4000, host: '127.0.0.1' }, (err, address) => {
    if (err) {
        console.error('Error starting server:', err);
        process.exit(1);
    }
    console.log(`Server is running on ${address}`);
});