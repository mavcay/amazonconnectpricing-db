const pool = require('../db');

const getRegions = async (req, res) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query('SELECT * FROM Regions');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        if (conn) conn.release();
    }
};

const addRegion = async (req, res) => {
    const { region_name, sub_region } = req.body;
    let conn;
    try {
        conn = await pool.getConnection();
        const result = await conn.query(
            'INSERT INTO Regions (region_name, sub_region) VALUES (?, ?)',
            [region_name, sub_region]
        );
        res.json({ message: 'Region added successfully', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        if (conn) conn.release();
    }
};

module.exports = { getRegions, addRegion };
