const instructions = require('../data/instructions.json');

exports.generateReply = function generateReply(botName, index) {
    const bot = instructions[botName];
    if (typeof bot[index]['message'] === 'string') {
        return bot[index]['message'];
    } else {
        return bot[index]['message'][getRandomInt(bot[index]['message'].length)];
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}