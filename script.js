// script.js

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('transparent-nav');
    } else {
        nav.classList.remove('transparent-nav');
    }
});
