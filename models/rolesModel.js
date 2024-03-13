const error = require('../controllers/errorController');
const makeQuery = require('./connection');
const createRole = async (role) => {
   
        const result = await makeQuery('INSERT INTO roles (role) VALUES (?)', [role], false);
        if (result[0]=== false){
            console.log(data[1])
            throw error.throwError('DATABASE_ERROR')
        }
        return result;
    
}
const getRoles = async () => {
        const data = await makeQuery('SELECT * FROM roles', [], true);
        if (data[0]=== false){
            console.log(data[1])
            throw error.throwError('DATABASE_ERROR')
        }
        return data;
    
}
const getRole = async (params) => {

    const { id } = params;
    const data = await makeQuery('SELECT * FROM roles WHERE id = ?', [id], true);
    if (data[0]=== false){
        console.log(data[1])
        throw error.throwError('DATABASE_ERROR')
    }
    return data;
    
}
const updateRole = async (params) => {
        const { id, role } = params;
        const data = await makeQuery('UPDATE roles SET role = ? WHERE id = ?', [role.role, id], false);
        if(data[0]=== false){
            console.log(data[1]);
            throw error.throwError('DATABASE_ERROR');
        }
        return data;
    
}
const deleteRole = async (params) => {
        const { id } = params;
        const result = await makeQuery('DELETE FROM roles WHERE id = ?', [id], false);
        if (result[0]=== false){
            
            throw error.throwError('DATABASE_ERROR')
        }
        else{
            if (result[1][0].affectedRows === 0){
                
                return {message : "Role not found", data : [], status : 404}
            }
            
            return {message : "Role deleted successfully", data : [], status : 200
        }
    }
        
    
}

module.exports = {
    createRole,
    getRoles,
    getRole,
    updateRole,
    deleteRole
}