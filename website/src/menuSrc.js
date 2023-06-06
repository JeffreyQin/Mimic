const namePanel = document.getElementById('namePanel');

document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const group = params.get('group');
    const names = await fetch('http://localhost:3000/login/load?group=' + group)
        .then(res => res.json())
    for (name of names.result) {
        const nameButton = document.createElement('button');
        nameButton.innerHTML = name;
        nameButton.addEventListener('click', () => {
            window.location.href = 'chat.html?bot=' + nameButton.innerHTML;
        })
        namePanel.appendChild(nameButton);
    }
});
