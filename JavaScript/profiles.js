document.addEventListener('DOMContentLoaded', function() {
    // Gestion des filtres de genre
    const genderButtons = document.querySelectorAll('.gender-toggle button');
    genderButtons.forEach(button => {
        button.addEventListener('click', function() {
            genderButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            loadProfiles(this.dataset.gender);
        });
    });

    // Gestion du modal
    const modal = document.getElementById('profileModal');
    const closeModal = document.querySelector('.close-modal');
    const viewButtons = document.querySelectorAll('.btn-view');

    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = 'block';
            // Charger les détails du profil
            loadProfileDetails(this.closest('.profile-card').dataset.profileId);
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Recherche et filtres
    const searchInput = document.querySelector('.search-filters input');
    const filters = document.querySelectorAll('.search-filters select');

    searchInput.addEventListener('input', debounce(function() {
        applyFilters();
    }, 300));

    filters.forEach(filter => {
        filter.addEventListener('change', function() {
            applyFilters();
        });
    });

    // Toggle des filtres avancés
    const advancedFiltersToggle = document.querySelector('.advanced-filters-toggle');
    const advancedFilters = document.querySelector('.advanced-filters');

    advancedFiltersToggle.addEventListener('click', function() {
        advancedFilters.classList.toggle('hidden');
    });
});

function loadProfiles(gender) {
    // Simulation de chargement des profils
    console.log(`Chargement des profils ${gender}`);
    // Ici, vous feriez un appel API pour charger les profils selon le genre
}

function loadProfileDetails(profileId) {
    // Simulation de chargement des détails du profil
    console.log(`Chargement des détails du profil ${profileId}`);
    // Ici, vous feriez un appel API pour charger les détails du profil
}

function applyFilters() {
    const searchTerm = document.querySelector('.search-filters input').value;
    const age = document.querySelector('select[name="age-range"]').value;
    const location = document.querySelector('select[name="location"]').value;
    const distance = document.querySelector('select[name="distance"]').value;

    // Simulation de filtrage
    console.log('Filtres appliqués:', { searchTerm, age, location, distance });
    // Ici, vous feriez un appel API avec les filtres
}

// Utilitaire pour débouncer les recherches
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}