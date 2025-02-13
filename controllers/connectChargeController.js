const connectChargeModel = require("../models/connectChargeModel");

const getConnectCharges = async (req, res) => {
    try {
        const charges = await connectChargeModel.getAllConnectCharges();
        res.json(charges);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addConnectCharge = async (req, res) => {
    const { charge_type, charge_rate } = req.body;
    try {
        const result = await connectChargeModel.addConnectCharge(charge_type, charge_rate);
        res.json({ message: "ConnectCharge added successfully", id: result.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteConnectCharge = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await connectChargeModel.deleteConnectChargeById(id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getConnectCharges, addConnectCharge, deleteConnectCharge };
