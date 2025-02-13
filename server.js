const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const regionRoutes = require('./routes/regions');
const countryRoutes = require("./routes/country"); 
const connectChargeRoutes = require("./routes/connectCharge");  
const callTypeRoutes = require("./routes/callType");  
const usageStatsRoutes = require("./routes/usageStats");  
const phoneTypeRoutes = require("./routes/phoneType");  
const chargesRoutes = require("./routes/charges");  

app.use('/api/regions', regionRoutes);
app.use("/api/countries", countryRoutes); 
app.use("/api/connectcharges", connectChargeRoutes);  
app.use("/api/calltypes", callTypeRoutes);  
app.use("/api/usagestats", usageStatsRoutes);  
app.use("/api/phonetype", phoneTypeRoutes);  
app.use("/api/charges", chargesRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
