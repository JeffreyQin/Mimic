const express = require('express');
const router = express.Router();
const chatGPT = require('../openai/chatgpt.js')


router.get('/reply', async (req, res) => {
    let text = await chatGPT.chatgpt(req.query['msg']);
    res.json({ result: text });
})

module.exports = router;
