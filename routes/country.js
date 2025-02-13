const express = require("express");
const router = express.Router();
const { getCountries, addCountry, deleteCountry } = require("../controllers/countryController");

router.get("/", getCountries);
router.post("/", addCountry);
router.delete("/:id", deleteCountry);

module.exports = router;
