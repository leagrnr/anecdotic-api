const factModel = require('../models/factsModel');

const getFacts = async (req, res) => {
    try {
        const facts = await factModel.getFacts();
        res.json(facts);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

const addFact = async (req, res) => {
    const { fact } = req.body;
    try {
        const newFact = await factModel.addFact(fact);
        res.json(newFact);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

const updateFact = async (req, res) => {
    const { id } = req.params;
    const { fact } = req.body;
    try {
        const updatedFact = await factModel.updateFact(id, fact);
        res.json(updatedFact);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

const deleteFact = async (req, res) => {
    const { id } = req.params;
    try {
        await factModel.deleteFact(id);
        res.send('Fact deleted');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

module.exports = {
    getFacts,
    addFact,
    updateFact,
    deleteFact,
};