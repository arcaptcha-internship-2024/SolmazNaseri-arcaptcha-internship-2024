const handlers = {
    createData: require('./createData.js').createData,
    getDataById: require('./getDataById.js').getDataById,
    updateDataById: require('./updateDataById.js').updateDataById,
    deleteDataById: require('./deleteDataById.js').deleteDataById,
};

export default handlers;