//Der Scheiß hat viel zu viel zeit gebraucht

// JavaScript für Header-Verhalten bei Scrollen
let lastScrollY = 0; // Letzte Scroll-Position
const header = document.querySelector('.scroll-header'); // Header-Element auswählen

// Scroll-Event-Handler
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Nach unten scrollen -> Header verstecken
        header.classList.add('hidden');
    } else {
        // Nach oben scrollen -> Header einblenden
        header.classList.remove('hidden');
    }   

    lastScrollY = currentScrollY; // Letzte Scroll-Position aktualisieren
});

document.querySelectorAll('.ausklapp-header').forEach(button => {
    button.addEventListener('click', () => { //wird der Button gedrückt ?
        const content = button.nextElementSibling;

        // Klappt aus
        const isActive = content.style.maxHeight;
        document.querySelectorAll('.ausklapp-inhalt').forEach(el => el.style.maxHeight = null);

        if (!isActive) {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});
