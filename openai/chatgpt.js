const { Configuration, OpenAIApi } = require('openai');
const config = require('../data/config.json');

module.exports = async function chatgpt(promptMsg) {
    const key = config.OPENAI.key;
    const organization = config.OPENAI_organization;
    const configuration = new Configuration({
        organization,
        key
    })
    const openai = new OpenAIApi(configuration);

    const completion = openai.createCompletion({
        model: 'text-davinci-003',
        prompt: promptMsg,
        temperature: 0,
        max_tokens: 1500,
    }, {
        timeout: 20000000,
        headers: {
            'Example-Header': 'example'
        }
    })

    if (completion) {
        return completion;
    }
}

