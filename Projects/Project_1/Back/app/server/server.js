import Fastify from 'fastify';
import dotenv from 'dotenv';
import fastifyStatic from '@fastify/static';
import fastifyCors from '@fastify/cors';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from '../routes/routes.js';
dotenv.config();
const fastify = Fastify({ logger: true });
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

fastify.listen({
    port: process.env.SERVER_PORT || 4000,
    host: process.env.SERVER_HOST || '0.0.0.0'
}, (err, address) => {
    if (err) {
        console.error('Error starting server:', err);
        process.exit(1);
    }
    console.log(`Server is running on ${address}`);
});