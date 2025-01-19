const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/facts', require('./routes/factsRoutes'));

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
});
