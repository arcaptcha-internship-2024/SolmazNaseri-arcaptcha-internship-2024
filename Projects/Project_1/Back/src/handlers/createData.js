import { saveToJson } from '../services/storage.js';
import { verifyCaptcha } from './captcha.js';

const storage = {
    json: saveToJson,
};

export async function createData(request, reply) {
    try {
        const { data = {}, sourceType = 'json', captchaToken = '' } = request.body || {};
        if (!captchaToken) {
            return reply.code(400).send({ message: 'Captcha token is missing' });
        }
        const captchaValid = await verifyCaptcha(captchaToken);
        if (!captchaValid) {
            return reply.code(400).send({ message: 'Invalid CAPTCHA' });
        }
        if (!storage[sourceType]) {
            return reply.code(400).send({ message: `Storage source ${sourceType} not supported` });
        }
        const result = await storage[sourceType](data);
        reply.code(200).send(result);
    } catch (error) {
        console.error('Error processing request:', error);
        reply.code(500).send({ message: 'Error processing request' });
    }
}