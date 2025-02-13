const pool = require("../db");

const getAllPhoneTypes = async () => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM PhoneType");
        return rows;
    } finally {
        if (conn) conn.release();
    }
};

const addPhoneType = async ({ phone_type }) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const result = await conn.query(
            "INSERT INTO PhoneType (phone_type) VALUES (?)",
            [phone_type]
        );
        return { id: result.insertId };
    } finally {
        if (conn) conn.release();
    }
};

const deletePhoneTypeById = async (id) => {
    let conn;
    try {
        conn = await pool.getConnection();
        await conn.query("DELETE FROM PhoneType WHERE id = ?", [id]);
        return { message: "PhoneType deleted successfully" };
    } finally {
        if (conn) conn.release();
    }
};

module.exports = { getAllPhoneTypes, addPhoneType, deletePhoneTypeById };
