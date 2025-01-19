const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

const getFacts = async () => {
    const result = await pool.query('SELECT * FROM facts');
    return result.rows;
};

const addFact = async (fact) => {
    const result = await pool.query('INSERT INTO facts (fact) VALUES ($1) RETURNING *', [fact]);
    return result.rows[0];
};

const updateFact = async (id, fact) => {
    const result = await pool.query('UPDATE facts SET fact = $1 WHERE id = $2 RETURNING *', [fact, id]);
    return result.rows[0];
};

const deleteFact = async (id) => {
    await pool.query('DELETE FROM facts WHERE id = $1', [id]);
};

module.exports = {
    getFacts,
    addFact,
    updateFact,
    deleteFact,
};