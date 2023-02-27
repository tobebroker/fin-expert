const navBarToggleButton = document.querySelector('.moto-widget-menu-toggle-btn');
const mobileNav = document.querySelector('.mobile-navbar');
const mobileNavLinks = mobileNav.querySelectorAll('a');

navBarToggleButton.addEventListener('click', function () {
    mobileNav.classList.toggle('show');
});

mobileNavLinks.forEach(e => {
    e.addEventListener('click', () => {
        mobileNav.classList.toggle('show');
    });
});