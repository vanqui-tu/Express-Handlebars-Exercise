const express = require('express')
const router = express.Router();
const {zodiacs } = require("../data");

router.get('/', (req, res) => {
    res.locals.zodiacs = zodiacs;
    res.render('task4');
})

module.exports = router;