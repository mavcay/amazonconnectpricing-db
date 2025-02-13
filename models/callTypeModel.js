const pool = require("../db");

const getAllCallTypes = async () => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM CallType");
        return rows;
    } finally {
        if (conn) conn.release();
    }
};

const addCallType = async (call_type) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const result = await conn.query(
            "INSERT INTO CallType (call_type) VALUES (?)",
            [call_type]
        );
        return { id: result.insertId };
    } finally {
        if (conn) conn.release();
    }
};

const deleteCallTypeById = async (id) => {
    let conn;
    try {
        conn = await pool.getConnection();
        await conn.query("DELETE FROM CallType WHERE id = ?", [id]);
        return { message: "CallType deleted successfully" };
    } finally {
        if (conn) conn.release();
    }
};

module.exports = { getAllCallTypes, addCallType, deleteCallTypeById };
