const instructions = require('../data/instructions.json');

exports.generatePrompt = function generatePrompt(botName, msg) {
    const bot = instructions[botName];

    let req = `Message: ${msg}.\nOutput a single integer based on the following instruction: \n`
    let insIndex = 1;
    while (bot.hasOwnProperty(insIndex)) {
        req += `${insIndex}. if the message ${bot[insIndex]['prompt']}, output '${insIndex}'.\n`
        insIndex ++;
    }
    req += `${insIndex}. otherwise, output '0'.`
    return req;
}