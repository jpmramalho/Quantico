document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    // Lógica para o formulário de Login (sem Firebase para a validação)
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            const username = document.getElementById('username').value; // Pegando o valor do campo "Login"
            const password = document.getElementById('password').value;

            // Lógica de validação: login '1' e senha '1'
            if (username === '1' && password === '1') {
                // Login bem-sucedido, redireciona para a página de boas-vindas
                window.location.href = 'home.html';
            } else {
                // Login falhou, exibe mensagem de erro
                errorMessage.textContent = 'Login ou senha incorretos. Tente novamente.';
            }
        });
    }

    // Removida toda a lógica de autenticação Firebase (cadastro e verificação de sessão)
    // daqui, pois não é usada para o login simples.
});