const express = require('express');
const router = express.Router();
const factController = require('../controllers/factsController');

router.get('/', factController.getFacts);
router.post('/', factController.addFact);
router.put('/:id', factController.updateFact);
router.delete('/:id', factController.deleteFact);

module.exports = router;