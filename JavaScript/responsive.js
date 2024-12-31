document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.profile-menu');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    dropdown.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });

    // Fermer le menu si l'utilisateur clique en dehors
    window.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});