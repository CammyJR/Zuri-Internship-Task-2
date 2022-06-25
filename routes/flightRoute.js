const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router
.get('/', controller.bookFlight)
.get('/:id',controller.bookFlight)
.post('/', controller.getFlight)
.put('/:id',controller.updateFlight)
.delete('/:id', controller.deleteUser);

module.exports = router;
