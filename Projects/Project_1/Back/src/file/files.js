import fs from 'fs';
import path from 'path';


const filePath = path.join(process.cwd(), 'src/dataBases/data.json');
console.log("this is: " + process.cwd())
export function readData() {
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath);
        return JSON.parse(content) || [];
    }
    return [];
}

export function createRecord(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}