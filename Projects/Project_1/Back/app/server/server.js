import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import fastifyCors from '@fastify/cors';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from '../routes/routes.js';

const fastify = Fastify();
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

fastify.register(fastifyStatic, {
    root: path.join(__dirname, '../../Client/dist'),
    prefix: '/',

});
fastify.register(fastifyCors, {
    origin: '*',
});
fastify.register(routes);

fastify.listen({ port: 4000, host: '0.0.0.0' }, (err, address) => {
    if (err) {
        console.error('Error starting server:', err);
        process.exit(1);
    }
    console.log(`Server is running on ${address}`);
});