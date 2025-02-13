const chargesModel = require("../models/chargesModel");

const getCharges = async (req, res) => {
    try {
        const charges = await chargesModel.getAllCharges();
        res.json(charges);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addCharge = async (req, res) => {
    const { region_id, country_id, connect_charge_id, call_type_id, phone_type_id, usage_id } = req.body;
    try {
        const result = await chargesModel.addCharge({ region_id, country_id, connect_charge_id, call_type_id, phone_type_id, usage_id });
        res.json({ message: "Charge added successfully", id: result.id, total_cost: result.total_cost });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCharge = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await chargesModel.deleteChargeById(id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getCharges, addCharge, deleteCharge };
