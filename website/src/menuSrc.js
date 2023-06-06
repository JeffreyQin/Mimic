const namePanel = document.getElementById('namePanel');

document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const group = params.get('group');
    const names = await fetch('http://localhost:3000/login/load?group=' + group)
        .then(res => res.json());
    for (let index = 0; index < names.length; index++) {
        const nameButton = document.createElement('button');
        nameButton.innerHTML = names[index];
        namePanel.appendChild(nameButton);
    }
});