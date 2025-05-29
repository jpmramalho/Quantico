document.addEventListener('DOMContentLoaded', function() {
    // Configuração do Firebase com seus dados (redundante se já em index.html, mas mantido para outros casos)
    const firebaseConfig = {
        apiKey: "AIzaSyCLWgVTPbEQIRuyCHYlTaCUVLIo-IIaRkw",
        authDomain: "quanticoapp-b8bc7.firebaseapp.com",
        projectId: "quanticoapp-b8bc7",
        storageBucket: "quanticoapp-b8bc7.firebasestorage.app",
        messagingSenderId: "24127501693",
        appId: "1:24127501693:web:ebbd4ff4c761ba7f344814"
    };

    // Inicializa o Firebase (apenas se não estiver inicializado por outra parte)
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    // Define as instâncias de auth e db que serão usadas em outras páginas
    window.auth = firebase.auth(); // Torna 'auth' global para outras páginas
    window.db = firebase.firestore(); // Torna 'db' global para outras páginas
});