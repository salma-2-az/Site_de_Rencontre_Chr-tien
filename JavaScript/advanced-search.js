document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('advancedSearchForm');

    // Gestion de la soumission du formulaire de recherche
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(searchForm);
        const searchParams = {
            ageRange: formData.get('ageRange'),
            location: formData.get('location'),
            maritalStatus: formData.get('maritalStatus'),
            values: formData.get('values'),
            educationLevel: formData.get('educationLevel'),
            church: formData.get('church')
        };

        // Simulation de recherche
        console.log('Recherche effectuée avec les paramètres:', searchParams);
        displayResults(searchParams);
    });
});

// Fonction pour afficher les résultats de la recherche
function displayResults(params) {
    const resultsGrid = document.querySelector('.results-grid');
    resultsGrid.innerHTML = ''; // Réinitialiser les résultats

    // Simulation de résultats
    for (let i = 0; i < 5; i++) {
        const profileCard = document.createElement('div');
        profileCard.classList.add('profile-card');
        profileCard.innerHTML = `
            <div class="profile-image">
                <img src="images/blurred-profile.jpg" alt="Profile" class="blurred">
            </div>
            <div class="profile-info">
                <h3>Profil ${i + 1}, 30 ans</h3>
                <p><i class="fas fa-map-marker-alt"></i> Localisation</p>
                <p><i class="fas fa-church"></i> Église</p>
                <button class="btn-view">Voir le profil</button>
            </div>
        `;
        resultsGrid.appendChild(profileCard);
    }
}