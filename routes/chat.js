const express = require('express');
const router = express.Router();


router.get('/reply', async (req, res) => {
    let text = await chatgpt(req.query['msg']);
    res.json({ result: text });
})

module.exports = router;
