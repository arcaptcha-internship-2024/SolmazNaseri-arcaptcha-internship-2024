    //CRUD (Create, Read, Update, Delete)  array as database 

    let database = [];

    //Create
    function createRecord(record) {
        database.push(record);
        console.log(record);
    }

    //Read
    function readRecord(index = null) {
        if (index === null) {
            return database;
        } else if (index >= 0 && index < database.length) {
            return database[index];
        } else {
            return "Record not found.";
        }
    }

    //Update
    function updateRecord(index, updatedRecord) {
        if (index >= 0) {
            database[index] = updatedRecord;
            console.log(updatedRecord);
        } else {
            console.log("Record not found.");
        }
    }

    // Delete
    function deleteRecord(index) {
        if (index >= 0 && index < database.length) {
            let removedRecord = database.splice(index, 1);
            console.log(removedRecord[0]);
        } else {
            console.log("Record not found.");
        }
    }

    //Test in example
    createRecord([id = 1, Name = 'ali', age = '15', job = 'student'])
    createRecord([id = 2, Name = 'reza', age = '20', job = 'programmer'])
    createRecord([id = 3, Name = 'sara', age = '35', job = 'writer'])
    console.log(readRecord(0))
        //update age for Record 1
    updateRecord(1, [id = 2, Name = 'reza', age = '21', job = 'programmer'])
    deleteRecord(2)
    console.log(readRecord());