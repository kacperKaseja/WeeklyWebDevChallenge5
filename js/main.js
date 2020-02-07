const hamburger = document.querySelector('.header__hamburger');
const menuMobile = document.querySelector('.header__menu');

const handleClick = function () {
    hamburger.classList.toggle('open');
    menuMobile.classList.toggle('active');
};


hamburger.addEventListener('click', handleClick);

document.querySelectorAll('a[href^="#"]').forEach(anchor => anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: "smooth",
        block: 'start'
    });
}));