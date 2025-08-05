const express = require('express');

const indexRouter = require('../controllers/index');

const router = express.Router();

router.get('/', indexRouter.getIndex);

module.exports = router;
