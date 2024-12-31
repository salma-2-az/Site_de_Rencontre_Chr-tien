document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const emailField = document.getElementById('emailField');
    const phoneField = document.getElementById('phoneField');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const togglePasswordBtns = document.querySelectorAll('.toggle-password');

    // Gestion du toggle Email/Téléphone
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            toggleBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            if (this.dataset.type === 'email') {
                emailField.classList.remove('hidden');
                phoneField.classList.add('hidden');
            } else {
                emailField.classList.add('hidden');
                phoneField.classList.remove('hidden');
            }
        });
    });

    // Toggle visibilité mot de passe
    togglePasswordBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            }
        });
    });

    // Vérification force du mot de passe
    passwordInput.addEventListener('input', function() {
        const strength = checkPasswordStrength(this.value);
        updatePasswordStrengthIndicator(strength);
    });

    // Validation du formulaire
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            // Envoyer les données au serveur
            submitForm();
        }
    });
});

function checkPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]+/)) strength++;
    if (password.match(/[A-Z]+/)) strength++;
    if (password.match(/[0-9]+/)) strength++;
    if (password.match(/[!@#$%^&*(),.?":{}|<>]+/)) strength++;
    return strength;
}

function updatePasswordStrengthIndicator(strength) {
    const meter = document.querySelector('.strength-meter');
    const text = document.querySelector('.strength-text');
    
    const colors = ['#dc3545', '#ffc107', '#28a745'];
    const messages = ['Faible', 'Moyen', 'Fort'];
    
    const index = Math.min(Math.floor(strength / 2), 2);
    
    meter.style.background = `linear-gradient(to right, ${colors[index]} ${strength * 20}%, #ddd ${strength * 20}%)`;
    text.textContent = messages[index];
    text.style.color = colors[index];
}

function validateForm() {
    let isValid = true;
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const terms = document.getElementById('terms');

    // Réinitialiser les messages d'erreur
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    // Validation email ou téléphone
    if (!emailField.classList.contains('hidden')) {
        if (!validateEmail(email.value)) {
            showError(email, 'Veuillez entrer une adresse email valide');
            isValid = false;
        }
    } else {
        if (!validatePhone(phone.value)) {
            showError(phone, 'Veuillez entrer un numéro de téléphone valide');
            isValid = false;
        }
    }

    // Validation mot de passe
    if (password.value.length < 8) {
        showError(password, 'Le mot de passe doit contenir au moins 8 caractères');
        isValid = false;
    }

    if (password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Les mots de passe ne correspondent pas');
        isValid = false;
    }

    if (!terms.checked) {
        showError(terms, 'Vous devez accepter les conditions d\'utilisation');
        isValid = false;
    }

    return isValid;
}

function showError(element, message) {
    const errorElement = element.nextElementSibling.classList.contains('error-message') 
        ? element.nextElementSibling 
        : element.parentElement.querySelector('.error-message');
    errorElement.textContent = message;
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
    return /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(phone);
}

function submitForm() {
    // Simulation d'envoi au serveur
    console.log('Formulaire envoyé');
    // Ici, vous ajouterez la logique pour envoyer les données au serveur
}