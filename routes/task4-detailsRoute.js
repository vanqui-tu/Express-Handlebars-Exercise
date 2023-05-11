const express = require('express')
const router = express.Router();
const { zodiacs } = require("../data");

router.get('/:name', (req, res) => {
    let name = req.params.name;
    let zodiac = zodiacs.filter(item => item.name == name);
    res.render('task4-details', {zodiac});
})

module.exports = router;