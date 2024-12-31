document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.getElementById('profileForm');
    const profilePictureInput = document.getElementById('profilePicture');
    const previewImage = document.getElementById('previewImage');

    // Afficher l'aperçu de la photo de profil
    profilePictureInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewImage.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });

    // Gestion de la soumission du formulaire
    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Ici, vous ajouteriez la logique pour envoyer les données au serveur
        console.log('Modifications enregistrées');
    });
});