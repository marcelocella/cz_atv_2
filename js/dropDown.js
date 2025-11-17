function toggleMenu() {
    const navMenu = document.getElementById('navMenu');

    navMenu.classList.toggle('open');
}


document.querySelectorAll('#navMenu a').forEach(item => {
    item.addEventListener('click', () => {
        const navMenu = document.getElementById('navMenu');
        
        if (navMenu.classList.contains('open') && window.innerWidth <= 768) {
            navMenu.classList.remove('open');
        }
    });
});