const pool = require('../db');

class RegionModel {
    static async getAll() {
        let conn;
        try {
            conn = await pool.getConnection();
            return await conn.query('SELECT * FROM Regions');
        } finally {
            if (conn) conn.release();
        }
    }

    static async add(region_name, sub_region) {
        let conn;
        try {
            conn = await pool.getConnection();
            const result = await conn.query(
                'INSERT INTO Regions (region_name, sub_region) VALUES (?, ?)',
                [region_name, sub_region]
            );
            return { id: result.insertId, region_name, sub_region };
        } finally {
            if (conn) conn.release();
        }
    }
}

module.exports = RegionModel;
