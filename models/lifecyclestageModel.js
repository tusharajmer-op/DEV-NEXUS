const error = require('../controllers/errorController');
const makeQuery = require('./connection');

const createLifecycleStage = async (lifecycleStage) => {
    const result = await makeQuery('INSERT INTO lifecyclestages (name) VALUES (?)', [lifecycleStage], false);
    if (result[0] === false) {
        throw error.throwError('DATABASE_ERROR')
    }
    return result;
}
const getLifecycleStages = async () => {
    const data = await makeQuery('SELECT * FROM lifecyclestages', [], true);
    if (data[0] === false) {
        throw error.throwError('DATABASE_ERROR')
    }
    return data;
}