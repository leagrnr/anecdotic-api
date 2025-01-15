const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.get('/api/anecdotes', (req, res) => {
    res.json([
        { id: 1, text: "Anecdote 1" },
        { id: 2, text: "Anecdote 2" }
    ]);
});

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
});
