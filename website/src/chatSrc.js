

const botName = document.getElementById('botName');
const chatForm = document.getElementById('chatForm');
const chatText = document.getElementById('chatText');
const chat = document.getElementById('chat');

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    botName.innerHTML = params.get('bot');
})

chatForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    appendUserText(chatText.value);
    
});



function appendUserText(text) {
    const newText = document.createElement('p');
    newText.innerHTML = '<b>You: </b>' + text;
    chat.appendChild(newText);
}

function appendBotText(text) {
    const newText = document.createElement('p');
    newText.innerHTML = '<b>' + botName.value + ': </b>' + text;
    chat.appendChild(newText);
}