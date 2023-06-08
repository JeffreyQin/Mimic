const express = require('express');
const router = express.Router();
const chatGPT = require('../openai/chatgpt.js');
const prompt = require('../openai/prompt.js');
const reply = require('../openai/reply.js')

router.get('/reply', async (req, res) => {
    const input = prompt.generatePrompt(req.query['bot'], req.query['msg']);
    var msgIndex = "";
    do {
        const text = await chatGPT.chatgpt(input);
        msgIndex = text.replace(new RegExp('\n', 'gi'), '');
        console.log(msgIndex);
    } while (msgIndex.length != 1);
    const output = reply.generateReply(req.query['bot'], msgIndex);
    res.json({ result: output })
})

module.exports = router;
