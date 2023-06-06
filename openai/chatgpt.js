const { Configuration, OpenAIApi } = require('openai');
const config = require('../data/config.json');

export async function chatGPT(promptMsg) {
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
        max_tokens: 1000,
    }, {
        timeout: 20000000,
    }
}


    const apiKey = config.get('OPEN_AI.KEY');
    let ret = { hotels:"", restaurants:"", activities:"", events:"" };
    const organization = config.get('OPEN_AI.ORGANIZATION');
    const configuration = new Configuration({
        organization,
        apiKey,
    });
    const openai = new OpenAIApi(configuration);

    const req = [
        openai.createCompletion({
            model: 'text-davinci-003',
            prompt: generatePrompt(
                'hotels',
                language,
                destination,
                budget,
                style,
                season,
                type,
                vegetarian,
                currency,
            ),
            temperature: 0.8,
            max_tokens: 1500,
        }, {
            timeout: 20000000,
            headers: {
                'Example-Header': 'example',
            },
        }).catch((err) => {
            if (err.response) {
                logger.error(`${err.response.status},${err.response.status}`);
            } else {
                logger.error(`err:${err.message} `);
            }
            return null;
        }),
        openai.createCompletion({
            model: 'text-davinci-003',
            prompt: generatePrompt(
                'restaurants',
                language,
                destination,
                budget,
                style,
                season,
                type,
                vegetarian,
                currency,
            ),
            temperature: 0.8,
            max_tokens: 1500,
        }, {
            timeout: 20000000,
            headers: {
                'Example-Header': 'example',
            },
        }).catch((err) => {
            if (err.response) {
                logger.error(`${err.response.status},${err.response.status}`);
            } else {
                logger.error(`err:${err.message} `);
            }
            return null;
        }), 
        openai.createCompletion({
            model: 'text-davinci-003',
            prompt: generatePrompt(
                'activities',
                language,
                destination,
                budget,
                style,
                season,
                type,
                vegetarian,
                currency,
            ),
            temperature: 0.8,
            max_tokens: 1500,
        }, {
            timeout: 20000000,
            headers: {
                'Example-Header': 'example',
            },
        }).catch((err) => {
            if (err.response) {
                logger.error(`${err.response.status},${err.response.status}`);
            } else {
                logger.error(`err:${err.message} `);
            }
            return null;
        }),
        openai.createCompletion({
            model: 'text-davinci-003',
            prompt: generatePrompt(
                'popular events',
                language,
                destination,
                budget,
                style,
                season,
                type,
                vegetarian,
                currency,
            ),
            temperature: 0.8,
            max_tokens: 1500,
        }, {
            timeout: 20000000,
            headers: {
                'Example-Header': 'example',
            },
        }).catch((err) => {
            if (err.response) {
                logger.error(`${err.response.status},${err.response.status}`);
            } else {
                logger.error(`err:${err.message} `);
            }
            return null;
        })
    ];

    const res = await Promise.all(req);

    for (let index = 0; index < res.length; index++) {
        if (res[index]) {
            const text = _.get(res[index], 'data.choices[0].text', '').replace(/\\n/g, '\\\\n');
            logger.debug(_.get(res[index], 'data.choices[0]'));

            switch (index) {
                case 0:
                    if (_.isString(text)) {
                        ret.hotels = getResJSON(text);
                    } else {
                        ret.hotels = JSON.stringify(text);
                    }
                case 1: 
                    if (_.isString(text)) {
                        ret.restaurants = getResJSON(text);
                    } else {
                        ret.restaurants = JSON.stringify(text);
                    }   
                case 2: 
                    if (_.isString(text)) {
                        ret.activities = getResJSON(text);
                    } else {
                        ret.activities = JSON.stringify(text);
                    }   
                case 3: 
                    if (_.isString(text)) {
                        ret.events = getResJSON(text);
                    } else {
                        ret.events = JSON.stringify(text);
                    }   
            }
        }
    }

    ctx.body = ret;
};
