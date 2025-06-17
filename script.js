// Attendre que le DOM soit complètement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {

    // Initialisation de ScrollReveal pour les animations au défilement
    const defaultRevealOptions = {
        distance: '50px',
        opacity: 0,
        duration: 1000,
        easing: 'ease-in-out',
    };

    ScrollReveal().reveal('.reveal-top', {
        ...defaultRevealOptions,
        origin: 'top',
        interval: 200,
    });

    ScrollReveal().reveal('.reveal-bottom', {
        ...defaultRevealOptions,
        origin: 'bottom',
        interval: 150,
    });

    ScrollReveal().reveal('.reveal-left', {
        ...defaultRevealOptions,
        origin: 'left',
        interval: 100,
    });

    ScrollReveal().reveal('.reveal-right', {
        ...defaultRevealOptions,
        origin: 'right',
        interval: 100,
    });

    // Fonctionnalité du menu hamburger pour la navigation mobile
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
            const isExpanded = hamburgerMenu.classList.contains('active');
            hamburgerMenu.setAttribute('aria-expanded', isExpanded);
        });

        // Ferme le menu de navigation lorsque un lien est cliqué (utile pour les appareils mobiles)
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    hamburgerMenu.classList.remove('active');
                    hamburgerMenu.setAttribute('aria-expanded', false);
                }
            });
        });
    }

    // Mise à jour dynamique de l'année du copyright dans le pied de page
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Défilement fluide pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            if (mainNav && hamburgerMenu && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                hamburgerMenu.classList.remove('active');
                hamburgerMenu.setAttribute('aria-expanded', false);
            }
        });
    });

    // Effet de l'en-tête au défilement
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                // Couleurs ajustées pour le nouvel arrière-plan du header
                header.style.background = 'rgba(13, 13, 13, 0.98)'; // Plus opaque et foncé au défilement
                header.style.borderBottomColor = 'rgba(42, 42, 42, 0.4)';
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.6)'; /* Ombre plus prononcée au défilement */
            } else {
                header.style.background = 'rgba(13, 13, 13, 0.95)'; /* Retour au fond par défaut */
                header.style.borderBottomColor = 'var(--border-color)';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)'; /* Retour à l'ombre par défaut */
            }
        });
    }
});
