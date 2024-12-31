document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    // Gestion de la soumission du formulaire de contact
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Simuler l'envoi du message
        console.log('Message envoyé:', { name, email, message });
        alert('Votre message a été envoyé avec succès !');
        contactForm.reset(); // Réinitialiser le formulaire
    });
});