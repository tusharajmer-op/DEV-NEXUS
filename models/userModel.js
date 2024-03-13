const error = require('../controllers/errorController');
const makeQuery = require('./connection');
const login = async (params) => {
        const { email } = params;
        console.log(email)
        const data = await makeQuery('SELECT * FROM users WHERE email = ?', [email], true);
        if (data[0]=== false){
            console.log(data[1])
            throw error.throwError('DATABASE_ERROR')
        }
        return data
    
}
const register = async (params) => {

        const result = await makeQuery('INSERT INTO users (name,email,password,avatar,address,phone) VALUES (?,?,?,?,?,?)', [params.name, params.email, params.password, params.avatar || '', params.address || '', params.phone || ''], false);
        if (result[0]=== false){
            console.log(data[1])
            throw error.throwError('DATABASE_ERROR')
        }
        return result;
    
}


module.exports = {
    login,
    register
}