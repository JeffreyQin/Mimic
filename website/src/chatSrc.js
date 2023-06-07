

const botName = document.getElementById('botName');
const chatForm = document.getElementById('chatForm');
const chatText = document.getElementById('chatText');
const chat = document.getElementById('chat');

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    botName.innerHTML = params.get('bot');
})

chatForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    appendUserText(chatText.value);
    const url = 'http://localhost:3000/chat/reply?bot=' + botName.innerHTML + '&msg=' + chatText.value;
    const reply = await fetch(url).then(res => res.json());
    appendBotText(reply.result);
});

function appendUserText(text) {
    const newText = document.createElement('p');
    newText.innerHTML = '<b>You: </b>' + text;
    chat.appendChild(newText);
}

function appendBotText(text) {
    const newText = document.createElement('p');
    newText.innerHTML = `<b>${botName.innerHTML}: </b>` + text;
    chat.appendChild(newText);
}