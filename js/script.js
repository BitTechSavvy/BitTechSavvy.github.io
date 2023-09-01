/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form, .about a', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .about h3, .footer-text p', { origin: 'right' });

/*==================== typed js ====================*/

const typed = new Typed('.multiple-text', {
    strings: ['Web Developer!',
        'virtuoso of data querying',
        'Python Enthusiast',
        'Problem Solver'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



const hometyped = new Typed('.home-text', {
    strings: ["with a flair for backend frameworks like Django and Flask. With a strong foundation in Python, SQL, and data analysis, I specialize in creating efficient, data-driven web solutions. My goal is to craft websites that seamlessly merge form and function, providing users with exceptional experiences."],
    typeSpeed: 15,
});



const abouttyped = new Typed('.about-text', {
    strings: ["Aligarh College of Engineering and Technology, 2023. A web development connoisseur, adorned with certificates in Python and Advanced SQL from HackerRank. My arsenal includes Python, Django, Flask, and SQL, harmonizing innovation and functionality. Precision honed through a Data Science program from Career 365 Team on Udemy. Join me in a realm where excellence isn't just a goal, but life itself. With each project, I blend analytical finesse and creative ingenuity, breathing life into ideas that shape digital landscapes."],
    typeSpeed: 20,
});


const webtyped = new Typed('.services-web-text', {
    strings: ["Crafting tailored web experiences that bring your vision to life. Our expertise, including Django backend, ensures seamless functionality and stunning design."],
    typeSpeed: 80,
});

const autotyped = new Typed('.services-auto-text', {
    strings: ["Empowering workflow through advanced automation. Our streamlined processes enhance precision, productivity, and efficiency."],
    typeSpeed: 80,
});

const datatyped = new Typed('.services-db-text', {
    strings: ["Maximizing data potential for informed decisions. Our experts manage and optimize databases, ensuring smooth information flow."],
    typeSpeed: 80,
});
