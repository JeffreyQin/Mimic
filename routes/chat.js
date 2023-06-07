const express = require('express');
const router = express.Router();


router.get('/reply', async (req, res) => {
    let text = await chatgpt(req.query['msg']);
    res.json({ result: text });
})

module.exports = router;



const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

async function chatgpt(promptMsg) {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY
    })
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: promptMsg,
        temperature: 0.8,
        max_tokens: 1000
    })

    return completion.data.choices[0].text;
}
