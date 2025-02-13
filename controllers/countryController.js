const pool = require("../db");

const getCountries = async (req, res) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query(`
            SELECT Country.id, Country.country_name, Regions.region_name 
            FROM Country 
            JOIN Regions ON Country.region_id = Regions.id
        `);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        if (conn) conn.release();
    }
};

const addCountry = async (req, res) => {
    const { country_name, region_id } = req.body;
    let conn;
    try {
        conn = await pool.getConnection();
        const result = await conn.query(
            "INSERT INTO Country (country_name, region_id) VALUES (?, ?)",
            [country_name, region_id]
        );
        res.json({ message: "Country added successfully", id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        if (conn) conn.release();
    }
};

const deleteCountry = async (req, res) => {
    const { id } = req.params;
    let conn;
    try {
        conn = await pool.getConnection();
        await conn.query("DELETE FROM Country WHERE id = ?", [id]);
        res.json({ message: "Country deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        if (conn) conn.release();
    }
};

module.exports = { getCountries, addCountry, deleteCountry };
