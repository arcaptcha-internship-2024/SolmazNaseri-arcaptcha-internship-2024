const http = require('http');

let database = [];

function createRecord(record) {
    database.push(record);
    return `Record added: ${JSON.stringify(record)}`;

}

function readRecord(index = null) {
    if (index === null) {
        return JSON.stringify(database);
    } else if (index >= 0 && index < database.length) {
        return JSON.stringify(database[index]);
    } else {
        return "Record not found.";
    }
}

function updateRecord(index, updatedRecord) {
    if (index >= 0 && index < database.length) {
        database[index] = updatedRecord;
        return `Record updated: ${JSON.stringify(updatedRecord)}`;
    } else {
        return "Record not found.";
    }
}

function deleteRecord(index) {
    if (index >= 0 && index < database.length) {
        let removedRecord = database.splice(index, 1);
        return `Record deleted: ${JSON.stringify(removedRecord[0])}`;
    } else {
        return "Record not found.";
    }
}