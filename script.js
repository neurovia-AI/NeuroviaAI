// Initialisation de ScrollReveal
ScrollReveal().reveal('.reveal-top', {
    distance: '50px',
    origin: 'top',
    opacity: 0,
    duration: 1000,
    interval: 200,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.reveal-bottom', {
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    duration: 1000,
    interval: 150,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.reveal-left', {
    distance: '50px',
    origin: 'left',
    opacity: 0,
    duration: 1000,
    interval: 100,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.reveal-right', {
    distance: '50px',
    origin: 'right',
    opacity: 0,
    duration: 1000,
    interval: 100,
    easing: 'ease-in-out'
});

// Fonctionnalité du menu hamburger
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('.main-nav');

if (hamburgerMenu && mainNav) {
    hamburgerMenu.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
        // Basculer l'attribut aria-expanded pour l'accessibilité
        const expanded = hamburgerMenu.getAttribute('aria-expanded') === 'true' || false;
        hamburgerMenu.setAttribute('aria-expanded', !expanded);
    });

    // Fermer la navigation lorsqu'un lien est cliqué (pour mobile)
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                hamburgerMenu.classList.remove('active');
                hamburgerMenu.setAttribute('aria-expanded', 'false'); // Réinitialiser aria-expanded
            }
        });
    });
}

// --- Soumission de formulaire et redirection ---
const contactForm = document.getElementById('contactForm');
const THANK_YOU_PAGE_URL = 'merci.html'; // Créez cette page !

if (contactForm) {
    contactForm.addEventListener('submit', async function(event) {
        event.preventDefault(); // Empêche la soumission par défaut du formulaire

        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    // Getform gère généralement Content-Type pour multipart/form-data automatiquement
                    // 'Accept': 'application/json' // Peut ajouter ceci si vous voulez une réponse JSON, mais Getform ne l'exige pas pour les soumissions de base
                }
            });

            // Vérifier si la soumission du formulaire a réussi
            // Getform renvoie un 200 OK pour les soumissions réussies
            if (response.ok) {
                // Rediriger vers la page de remerciement
                window.location.href = THANK_YOU_PAGE_URL;
            } else {
                // Gérer les réponses non-OK (par exemple, erreur Getform, erreur serveur)
                console.error('La soumission du formulaire a échoué :', response.status, response.statusText);
                alert('Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer plus tard.');
                // Optionnellement, analyser la réponse pour une erreur plus spécifique de Getform
                // const errorData = await response.json();
                // console.error('Détails de l\'erreur :', errorData);
            }
        } catch (error) {
            // Gérer les erreurs réseau
            console.error('Erreur réseau lors de la soumission du formulaire :', error);
            alert('Problème de connexion. Veuillez vérifier votre internet et réessayer.');
        }
    });
}

// Définir l'année en cours dans le pied de page
document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});// Initialisation de ScrollReveal
ScrollReveal().reveal('.reveal-top', {
    distance: '50px',
    origin: 'top',
    opacity: 0,
    duration: 1000,
    interval: 200,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.reveal-bottom', {
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    duration: 1000,
    interval: 150,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.reveal-left', {
    distance: '50px',
    origin: 'left',
    opacity: 0,
    duration: 1000,
    interval: 100,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.reveal-right', {
    distance: '50px',
    origin: 'right',
    opacity: 0,
    duration: 1000,
    interval: 100,
    easing: 'ease-in-out'
});

// Fonctionnalité du menu hamburger
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('.main-nav');

if (hamburgerMenu && mainNav) {
    hamburgerMenu.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
        // Basculer l'attribut aria-expanded pour l'accessibilité
        const expanded = hamburgerMenu.getAttribute('aria-expanded') === 'true' || false;
        hamburgerMenu.setAttribute('aria-expanded', !expanded);
    });

    // Fermer la navigation lorsqu'un lien est cliqué (pour mobile)
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                hamburgerMenu.classList.remove('active');
                hamburgerMenu.setAttribute('aria-expanded', 'false'); // Réinitialiser aria-expanded
            }
        });
    });
}

// --- Soumission de formulaire et redirection ---
const contactForm = document.getElementById('contactForm');
const THANK_YOU_PAGE_URL = 'merci.html'; // Créez cette page !

if (contactForm) {
    contactForm.addEventListener('submit', async function(event) {
        event.preventDefault(); // Empêche la soumission par défaut du formulaire

        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    // Getform gère généralement Content-Type pour multipart/form-data automatiquement
                    // 'Accept': 'application/json' // Peut ajouter ceci si vous voulez une réponse JSON, mais Getform ne l'exige pas pour les soumissions de base
                }
            });

            // Vérifier si la soumission du formulaire a réussi
            // Getform renvoie un 200 OK pour les soumissions réussies
            if (response.ok) {
                // Rediriger vers la page de remerciement
                window.location.href = THANK_YOU_PAGE_URL;
            } else {
                // Gérer les réponses non-OK (par exemple, erreur Getform, erreur serveur)
                console.error('La soumission du formulaire a échoué :', response.status, response.statusText);
                alert('Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer plus tard.');
                // Optionnellement, analyser la réponse pour une erreur plus spécifique de Getform
                // const errorData = await response.json();
                // console.error('Détails de l\'erreur :', errorData);
            }
        } catch (error) {
            // Gérer les erreurs réseau
            console.error('Erreur réseau lors de la soumission du formulaire :', error);
            alert('Problème de connexion. Veuillez vérifier votre internet et réessayer.');
        }
    });
}

// Définir l'année en cours dans le pied de page
document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});