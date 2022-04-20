// abrir e fechar menu */
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for(const element of toggle){
    element.addEventListener("click", () => {
        nav.classList.toggle("show")
    })
};

// fechar menu quando clicar em um item
const links = document.querySelectorAll("nav ul li a");

for(const link of links) {
    link.addEventListener("click", () => {
        nav.classList.remove("show")
    })
};

const header = document.querySelector("#header");
const navHeight = header.offsetHeight;
function changeHeaderWhenScroll() {        
    if(window.scrollY >= navHeight){
        header.classList.add("scroll")
    } else {
        header.classList.remove("scroll")
    }
}

// scrollReveal
const scroll = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 800,
    reset: true
});

ScrollReveal().reveal(
    `#home .image, #home .text,
     #about .image, #about .text,
     #services header, #services .card,
     #testimonials header, #testimonials .testimonials,
     #contact .text, #contact .links
     footer .text, footer .socials`,{ interval: 100 }
)

const backToTopButton = document.querySelector(".back-to-top");
function backToTop() {

    if(window.scrollY >= 500) {
        backToTopButton.classList.add("show")
    } else {
        backToTopButton.classList.remove("show")
    }
}

// When scroll
window.addEventListener("scroll", () => {
    changeHeaderWhenScroll()
    backToTop()
});
