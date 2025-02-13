const callTypeModel = require("../models/callTypeModel");

const getCallTypes = async (req, res) => {
    try {
        const callTypes = await callTypeModel.getAllCallTypes();
        res.json(callTypes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addCallType = async (req, res) => {
    const { call_type } = req.body;
    try {
        const result = await callTypeModel.addCallType(call_type);
        res.json({ message: "CallType added successfully", id: result.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCallType = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await callTypeModel.deleteCallTypeById(id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getCallTypes, addCallType, deleteCallType };
