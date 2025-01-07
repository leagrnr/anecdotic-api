const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const factRoutes = require('./routes/factRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', factRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
