const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
const { formater } = require('../service');
dotenv.config();

const pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT,
    rowsAsArray: true
});

const makeQuery = async (sql, params, isRead = true, isReturning = false) => {
    let connection;
    try {
        connection = await pool.getConnection();
        if (isRead) {
            const rows = await connection.query(sql, params);
            return [true, formater.formatData(rows)];
        } else {
            await connection.beginTransaction();
            const result = await connection.query(sql, params);
            await connection.commit();
            if (isReturning) {
                return [true, formater.formatData(result)];
            }
            return [true, result];
        }
    } catch (err) {
        console.log(err);
        if (connection) {
            await connection.rollback();
        }
        return [false, err];
    } finally {
        if (connection) {
            connection.release();
        }
    }
}

module.exports = makeQuery;
