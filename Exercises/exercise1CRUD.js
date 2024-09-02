    //CRUD (Create, Read, Update, Delete)  array as database 

    let database = [];

    function createRecord(record) {
        database.push(record);
        console.log(`Record added:`, record);
    }

    function readRecord(index = null) {
        if (index === null) {
            return database;
        } else if (index >= 0 && index < database.length) {
            return database[index];
        } else {
            return "Record not found.";
        }
    }


    function updateRecord(index, updatedRecord) {
        if (index >= 0) {
            database[index] = updatedRecord;
            console.log(`Record updated:`, updatedRecord);
        } else {
            console.log("Record not found.");
        }
    }


    function deleteRecord(index) {
        if (index >= 0 && index < database.length) {
            let removedRecord = database.splice(index, 1);
            console.log(`Record deleted:`, removedRecord[0]);
        } else {
            console.log("Record not found.");
        }
    }

    //Test in example
    createRecord({
        id: 1,
        Name: 'ali',
        age: '15',
        job: 'student'
    })
    createRecord({
        id: 2,
        Name: 'reza',
        age: '20',
        job: 'programmer'
    })
    createRecord({
        id: 3,
        Name: 'sara',
        age: '35',
        job: 'writer'
    })
    console.log("Record is:", readRecord(0))
        //update age for Record 1
    updateRecord(1, [id = 2, Name = 'reza', age = '21', job = 'programmer'])
    deleteRecord(2)
    console.log("records after delete", readRecord());