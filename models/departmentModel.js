const makeQuery = require('./connection');
const createDepartment = async (department) => {
    const result = await makeQuery('INSERT INTO departments (department) VALUES (?)', [department], false);
    return result;
}
const getDepartments = async () => {
    const result = await makeQuery('SELECT * FROM departments');
    return result;
}
// const getDepartment = async (id) => {
//     const result = await makeQuery('SELECT * FROM departments WHERE id = ?', [id]);
//     if (result.length > 0) {
//         return result;
//     }
//     return false;
// }
// const updateDepartment = async (id, department) => {
//     const result = await makeQuery('UPDATE departments SET department = ? WHERE id = ?', [department, id], false);
//     if (result.affectedRows === 1) {
//         return true;
//     }
//     return false;
// }
// const deleteDepartment = async (id) => {
//     const result = await makeQuery('DELETE FROM departments WHERE id = ?', [id], false);
//     if (result.affectedRows === 1) {
//         return true;
//     }
//     return false;
// }
module.exports = {
    createDepartment,
    getDepartments,
    // getDepartment,
    // updateDepartment,
    // deleteDepartment
}