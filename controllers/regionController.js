const db = require('../config/db');

exports.getRegions = async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT id, region_name, sub_region FROM Regions');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: "Database error", details: error.message });
    }
};
