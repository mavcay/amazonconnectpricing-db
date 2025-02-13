const pool = require("../db");

const getAllConnectCharges = async () => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM ConnectCharge");
        return rows;
    } finally {
        if (conn) conn.release();
    }
};

const addConnectCharge = async (charge_type, charge_rate) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const result = await conn.query(
            "INSERT INTO ConnectCharge (charge_type, charge_rate) VALUES (?, ?)",
            [charge_type, charge_rate]
        );
        return { id: result.insertId };
    } finally {
        if (conn) conn.release();
    }
};

const deleteConnectChargeById = async (id) => {
    let conn;
    try {
        conn = await pool.getConnection();
        await conn.query("DELETE FROM ConnectCharge WHERE id = ?", [id]);
        return { message: "ConnectCharge deleted successfully" };
    } finally {
        if (conn) conn.release();
    }
};

module.exports = { getAllConnectCharges, addConnectCharge, deleteConnectChargeById };
