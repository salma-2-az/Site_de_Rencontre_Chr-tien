document.addEventListener('DOMContentLoaded', function() {
    const requestForm = document.getElementById('passwordResetRequestForm');
    const resetForm = document.getElementById('passwordResetForm');
    const togglePasswordBtns = document.querySelectorAll('.toggle-password');

    // Gestion de la demande de réinitialisation
    requestForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        const identifier = document.getElementById('identifier').value;

        if (validateIdentifier(identifier)) {
            // Simuler l'envoi de l'email/SMS
            sendResetInstructions(identifier);
        }
    });

    // Gestion de la création du nouveau mot de passe
    resetForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validatePasswordReset()) {
            resetPassword();
        }
    });

    // Toggle visibilité mot de passe
    togglePasswordBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const type = input.type === 'password' ? 'text' : 'password';
            input.type = type;
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    });

    // Vérification force du mot de passe
    const newPasswordInput = document.getElementById('newPassword');
    if (newPasswordInput) {
        newPasswordInput.addEventListener('input', function() {
            const strength = checkPasswordStrength(this.value);
            updatePasswordStrengthIndicator(strength);
        });
    }
});

function validateIdentifier(identifier) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    
    if (!identifier) {
        showError('identifier', 'Veuillez entrer votre email ou téléphone');
        return false;
    }
    
    if (!emailRegex.test(identifier) && !phoneRegex.test(identifier)) {
        showError('identifier', 'Format invalide');
        return false;
    }
    
    return true;
}

function validatePasswordReset() {
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    let isValid = true;

    if (newPassword.length < 8) {
        showError('newPassword', 'Le mot de passe doit contenir au moins 8 caractères');
        isValid = false;
    }

    if (newPassword !== confirmPassword) {
        showError('confirmPassword', 'Les mots de passe ne correspondent pas');
        isValid = false;
    }

    return isValid;
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = field.nextElementSibling.classList.contains('error-message') 
        ? field.nextElementSibling 
        : field.parentElement.querySelector('.error-message');
    errorElement.textContent = message;
}

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

function sendResetInstructions(identifier) {
    // Simulation d'envoi d'instructions
    console.log('Envoi des instructions à:', identifier);
    
    // Dans un cas réel, vous feriez un appel API ici
    setTimeout(() => {
        // Afficher un message de confirmation
        document.getElementById('requestResetForm').innerHTML = `
            <div class="success-message">
                <i class="fas fa-check-circle"></i>
                <h2>Instructions envoyées !</h2>
                <p>Si un compte existe avec ${identifier}, vous recevrez les instructions de réinitialisation.</p>
            </div>
        `;
    }, 1000);
}

function resetPassword() {
    // Simulation de réinitialisation
    console.log('Réinitialisation du mot de passe...');
    
    // Dans un cas réel, vous feriez un appel API ici
    setTimeout(() => {
        document.getElementById('newPasswordForm').classList.add('hidden');
        document.getElementById('successMessage').classList.remove('hidden');
    }, 1000);
}