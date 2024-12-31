document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');

    // Toggle visibilité du mot de passe
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

    // Validation et soumission du formulaire
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Réinitialiser les messages d'erreur
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        
        const identifier = document.getElementById('identifier').value;
        const password = passwordInput.value;
        
        if (validateForm(identifier, password)) {
            // Simulation de connexion
            handleLogin(identifier, password);
        }
    });
});

function validateForm(identifier, password) {
    let isValid = true;
    
    // Validation de l'identifiant (email ou téléphone)
    if (!identifier) {
        showError('identifier', 'Veuillez entrer votre email ou téléphone');
        isValid = false;
    } else if (!validateIdentifier(identifier)) {
        showError('identifier', 'Format invalide');
        isValid = false;
    }

    // Validation du mot de passe
    if (!password) {
        showError('password', 'Veuillez entrer votre mot de passe');
        isValid = false;
    }

    return isValid;
}

function validateIdentifier(identifier) {
    // Validation email ou téléphone
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    
    return emailRegex.test(identifier) || phoneRegex.test(identifier);
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = field.nextElementSibling.classList.contains('error-message') 
        ? field.nextElementSibling 
        : field.parentElement.querySelector('.error-message');
    errorElement.textContent = message;
}

function handleLogin(identifier, password) {
    // Simulation d'appel API
    console.log('Tentative de connexion...');
    
    // Ici, vous ajouterez la logique de connexion avec votre backend
    // Exemple de simulation :
    setTimeout(() => {
        // Simuler une connexion réussie
        window.location.href = 'dashboard.html';
    }, 1000);
}