// handler/index.js
import { createData } from './createData.js';
import { getDataById } from './getDataById.js';
import { updateDataById } from './updateDataById.js';
import { deleteDataById } from './deleteDataById.js';

const handlers = {
    createData,
    getDataById,
    updateDataById,
    deleteDataById,
};

export default handlers;