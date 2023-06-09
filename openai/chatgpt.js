const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

exports.chatgpt = async function chatgpt(promptMsg) {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY
    })
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createCompletion({
        model: 'text-davinci-002',
        prompt: promptMsg,
        temperature: 0,
        max_tokens: 1000
    })

    return completion.data.choices[0].text;
}

