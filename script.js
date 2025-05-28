document.addEventListener('DOMContentLoaded', function() {
    // Suas credenciais do Firebase
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY", // <-- SUBSTITUA PELA SUA CHAVE DE API REAL
        authDomain: "quantico-app-18f7f.firebaseapp.com",
        projectId: "quantico-app-18f7f",
        storageBucket: "quantico-app-18f7f.appspot.com",
        messagingSenderId: "150416611107",
        appId: "1:150416611107:web:e5fe8844ec909b35d55e96"
    };

    // Inicializa o Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    // const db = firebase.firestore(); // Descomente se for usar o Firestore

    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    const registerLink = document.getElementById('registerLink');

    // Se estiver na página de login, verifica se já está logado
    // e redireciona para home.html
    auth.onAuthStateChanged(function(user) {
        if (user && window.location.pathname.endsWith('index.html')) {
            window.location.href = 'home.html';
        }
    });

    // Lógica para o formulário de Login
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Autenticação com Firebase
            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Login bem-sucedido
                    window.location.href = 'home.html'; // Redireciona para a página de boas-vindas
                })
                .catch((error) => {
                    // Trata os erros de login
                    let message = '';
                    switch (error.code) {
                        case 'auth/user-not-found':
                        case 'auth/wrong-password':
                            message = 'E-mail ou senha incorretos.';
                            break;
                        case 'auth/invalid-email':
                            message = 'Formato de e-mail inválido.';
                            break;
                        case 'auth/too-many-requests':
                            message = 'Muitas tentativas de login. Tente novamente mais tarde.';
                            break;
                        default:
                            message = 'Ocorreu um erro ao fazer login. Tente novamente.';
                            console.error("Erro de login:", error.message);
                    }
                    errorMessage.textContent = message;
                });
        });
    }

    // Lógica para o link de Cadastro (opcional, para um popup ou outra tela)
    if (registerLink) {
        registerLink.addEventListener('click', function(event) {
            event.preventDefault();
            const email = prompt("Para cadastro, digite seu E-mail:");
            const password = prompt("Para cadastro, digite sua Senha (mínimo 6 caracteres):");

            if (email && password) {
                auth.createUserWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        alert("Usuário cadastrado com sucesso! Agora você pode fazer login.");
                    })
                    .catch((error) => {
                        let message = '';
                        switch (error.code) {
                            case 'auth/email-already-in-use':
                                message = 'Este e-mail já está em uso.';
                                break;
                            case 'auth/invalid-email':
                                message = 'Formato de e-mail inválido.';
                                break;
                            case 'auth/weak-password':
                                message = 'A senha deve ter pelo menos 6 caracteres.';
                                break;
                            default:
                                message = 'Erro ao cadastrar usuário. Tente novamente.';
                                console.error("Erro de cadastro:", error.message);
                        }
                        errorMessage.textContent = message;
                    });
            }
        });
    }
});