const pool = require('../db');

class CountryModel {
    static async getAll() {
        let conn;
        try {
            conn = await pool.getConnection();
            return await conn.query(`
                SELECT Country.id, Country.country_name, Regions.region_name
                FROM Country 
                INNER JOIN Regions ON Country.region_id = Regions.id
            `);
        } finally {
            if (conn) conn.release();
        }
    }

    static async add(country_name, region_id) {
        let conn;
        try {
            conn = await pool.getConnection();
            const result = await conn.query(
                'INSERT INTO Country (country_name, region_id) VALUES (?, ?)',
                [country_name, region_id]
            );
            return { id: result.insertId, country_name, region_id };
        } finally {
            if (conn) conn.release();
        }
    }
}

module.exports = CountryModel;
