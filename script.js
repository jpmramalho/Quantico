document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === '1' && password === '1') {
                window.location.href = 'home.html';
            } else {
                errorMessage.textContent = 'Login ou senha incorretos. Tente novamente.';
            }
        });
    }
});