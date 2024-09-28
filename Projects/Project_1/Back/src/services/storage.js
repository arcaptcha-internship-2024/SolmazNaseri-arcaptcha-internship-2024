import { readData, createRecord } from '../orm/files.js';

export async function saveToJson(data) {
    let jsonData = readData();
    jsonData.push(data);

    createRecord(jsonData);
    return { message: 'Data saved successfully' };
}

export async function getJsonDataById(id) {
    const jsonData = readData();
    return jsonData.find((entry, index) => index === id);
}

export async function updateJsonDataById(id, updatedData) {
    let jsonData = readData();
    if (id >= jsonData.length) return null;

    jsonData[id] = updatedData;
    createRecord(jsonData);
    return { message: 'Data updated successfully' };
}

export async function deleteJsonDataById(id) {
    let jsonData = readData();
    if (id >= jsonData.length) return null;

    jsonData.splice(id, 1);
    createRecord(jsonData);
    return { message: 'Record deleted successfully' };
}