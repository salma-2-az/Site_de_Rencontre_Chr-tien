document.addEventListener('DOMContentLoaded', function() {
    // Simuler le chargement des données
    loadDashboardData();
});

// Fonction pour charger les données du tableau de bord
function loadDashboardData() {
    // Simuler des données
    const userCount = 150; // Exemple de nombre d'utilisateurs
    const contentCount = 20; // Exemple de nombre de contenus modérés
    const statsCount = 5; // Exemple de nombre de statistiques

    // Mettre à jour le tableau de bord avec les données
    document.getElementById('userCount').textContent = userCount;
    document.getElementById('contentCount').textContent = contentCount;
    document.getElementById('statsCount').textContent = statsCount;

    // Charger l'activité récente
    loadRecentActivity();
}

// Fonction pour charger l'activité récente
function loadRecentActivity() {
    const activityLog = document.getElementById('activityLog');

    // Simuler des logs d'activité
    const activities = [
        { date: '2023-10-01', action: 'Inscription', user: 'Mohamed K.' },
        { date: '2023-10-02', action: 'Suppression de profil', user: 'Ben D.' },
        { date: '2023-10-03', action: 'Modération de contenu', user: 'Idress K.' },
        { date: '2023-10-04', action: 'Validation de profil', user: 'Vazoumana T.' },
        { date: '2023-10-05', action: 'Mise à jour de profil', user: 'Franck L.' },
    ];

    // Remplir le tableau avec les logs d'activité
    activities.forEach(activity => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${activity.date}</td>
            <td>${activity.action}</td>
            <td>${activity.user}</td>
        `;
        activityLog.appendChild(row);
    });
}