const express = require('express');
const router = express.Router();
const { getPlayerStats, uploadPlayerStats } = require('../controllers/playerstatscontroller')

router
    .route('/')
    .get(getPlayerStats);

router
    .route('/upload')
    .post(uploadPlayerStats);

module.exports = router;