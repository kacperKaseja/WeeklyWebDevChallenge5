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
    menuMobile.classList.toggle('active');
    hamburger.classList.toggle('open');
}));

function initMap() {
    // The location of Uluru
    let uluru = {
        lat: -25.344,
        lng: 131.036
    };
    // The map, centered at Uluru
    let map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 5,
            center: uluru,
        });
    // The marker, positioned at Uluru
    let marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

const scrollToTopBtn = document.querySelector('.contact__back-to-top');

function scrollTop(e) {
    e.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
}


scrollToTopBtn.addEventListener('click', scrollTop);