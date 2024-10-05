import axios from 'axios';

const VERIFY_URL = "https://api.arcaptcha.co/arcaptcha/api/verify";
const SECRET_KEY = process.env.ARCAPTCHA_SECRET_KEY;

export async function verifyCaptcha(token) {
    try {
        const response = await axios.post(VERIFY_URL, {
            secret_key: SECRET_KEY,
            challenge_id: token,
        });

        return response.data.success;
    } catch (error) {
        console.error('Error verifying CAPTCHA:', error);
        return false;
    }
}