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

