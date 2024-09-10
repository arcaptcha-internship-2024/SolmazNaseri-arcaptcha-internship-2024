import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'data.json');

export const readData = () => {
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath);
        return JSON.parse(content) || [];
    }
    return [];
};

export const createRecord = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};