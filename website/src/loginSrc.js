const loginForm = document.getElementById('loginForm');
const loginText = document.getElementById('loginText');
const loginError = document.getElementById('loginError');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = await fetch('http://localhost:3000/login/validate?passcode=' + loginText.value)
            .then(res => res.json());
    console.log(data.result);
    if (data.result == 'passed') {
        window.location.href = 'menu.html?group=' + loginText.value;
    } else {
        loginError.innerHTML = 'Invalid credentials'
    }
});

