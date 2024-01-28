
// Initialize Swiper

const swiper = new Swiper('.swiper', {

    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInterection: false,
    }

});

// Hamburger menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('ri-close-line');
    navbar.classList.toggle('active');
}

// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle button and navbar when click navbar links (scroll) 
    menuIcon.classList.remove('ri-close-line');
    navbar.classList.remove('active');
}

// ScrollReveal animations

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home-container-right`, { origin: 'top' })
sr.reveal(`.home-container-left`, { origin: 'left', delay: 1500 })
sr.reveal(`.swiper`, { origin: 'top' })
sr.reveal(`.feature-container-right`, { origin: 'top' })
sr.reveal(`.feature-box`, { origin: 'left', delay: 2000, interval: 600 })
sr.reveal(`.product-box`, { origin: 'left', interval: 1000 })
sr.reveal(`.subscribe-container`, { origin: 'top' })
sr.reveal(`.social-icon`, { origin: 'left', delay: 1500, interval: 1000 })