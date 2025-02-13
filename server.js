const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const regionRoutes = require('./routes/regions'); // ✅ Make sure this is correct
app.use('/api/regions', regionRoutes); // ✅ Correct usage of middleware

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
