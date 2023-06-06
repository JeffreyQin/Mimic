const express = require('express');
const router = express.Router();

const groups = require('../data/groups.json');

router.get('/validate', (req, res) => {
    if (groups.hasOwnProperty(req.query['passcode'])) {
        res.json({ result: 'passed' });
    } else {
        res.json({ result: 'failed' });
    }
})

router.get('/load', (req, res) => {
    res.json({ result: groups[req.query['group']] })
})

module.exports = router;
