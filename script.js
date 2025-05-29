document.addEventListener('DOMContentLoaded', function() {
    // Configuração do Firebase com seus dados
    const firebaseConfig = {
        apiKey: "AIzaSyCLWgVTPbEQIRuyCHYlTaCUVLIo-IIaRkw",
        authDomain: "quanticoapp-b8bc7.firebaseapp.com",
        projectId: "quanticoapp-b8bc7",
        storageBucket: "quanticoapp-b8bc7.firebasestorage.app",
        messagingSenderId: "24127501693",
        appId: "1:24127501693:web:ebbd4ff4c761ba7f344814"
    };

    // Inicializa o Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    // Inicializa o Firestore
    const db = firebase.firestore();

    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    if (loginForm) {
        loginForm.addEventListener('submit', async function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                // Tenta fazer login com e-mail e senha usando o Firebase Authentication
                await auth.signInWithEmailAndPassword(email, password);
                // Se o login for bem-sucedido, redireciona para a página home
                window.location.href = 'home.html';
            } catch (error) {
                // Exibe mensagens de erro específicas do Firebase
                let message = 'Erro desconhecido. Tente novamente.';
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
                        message = `Erro de login: ${error.message}`;
                        break;
                }
                errorMessage.textContent = message;
                console.error("Erro de login no Firebase:", error);
            }
        });
    }
});