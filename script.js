// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax Scrolling
window.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    hero.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
});
