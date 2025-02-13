const phoneTypeModel = require("../models/phoneTypeModel");

const getPhoneTypes = async (req, res) => {
    try {
        const phoneTypes = await phoneTypeModel.getAllPhoneTypes();
        res.json(phoneTypes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addPhoneType = async (req, res) => {
    const { phone_type } = req.body;
    try {
        const result = await phoneTypeModel.addPhoneType({ phone_type });
        res.json({ message: "PhoneType added successfully", id: result.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deletePhoneType = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await phoneTypeModel.deletePhoneTypeById(id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getPhoneTypes, addPhoneType, deletePhoneType };
