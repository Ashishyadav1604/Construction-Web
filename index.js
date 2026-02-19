const navMenu = document.getElementById('nav-menu'),
navToggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close')

// menu show
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU MOBILE

const navLink=document.querySelectorAll('.nav__link')

const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click',linkAction))

// CHANGING BACKGROUND HEADER
const bgHeader=()=>{
    const header=document.getElementById('header')
    this.scrollY>=50? header.classList.add('bg-header')
    :header.classList.remove('bg-header')
}
window.addEventListener('scroll',bgHeader)
bgHeader()



// const swiperService = new Swiper('.services_swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,
//   spaceBetween:24,
//   slidesPerView:'auto',

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },


// });


const swiperService = new Swiper('.services_swiper', {
  loop: true,
  direction: 'horizontal',
  spaceBetween: 24,
//   grabCursor: true,
  slidesPerView: 'auto',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


// SHOW SCROLL UP
const scrollup=()=>{
    const scrollup =document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                        :scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollup)
scrollup()

// SCROLL SECTIONS ACTIVE LINK

const sections =document.querySelectorAll('section[id]')

const scrollActive=()=>{
    const scrollDown =window.scrollY

    sections.forEach(current =>{
        const sectionHeight=current.offsetHeight,
        sectionTop=current.offsetTop - 58,
        sectionId=current.getAttribute('id'),
        sectionClass=document.querySelector('.nav__menu a[href*='+ sectionId + ']')

        if(scrollDown>sectionTop && scrollDown <=sectionTop+sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)


// SMOTH UPPER JAGEGA CLICK KARNE PER
const scrollUpBtn = document.getElementById('scroll-up')

scrollUpBtn.addEventListener('click', (e) => {
    e.preventDefault()

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1500,
  delay: 200,
  reset: false
});

/* HOME */
sr.reveal('.home__data');
sr.reveal('.home__info div', { delay: 400, interval: 200 });
sr.reveal('.home__images img', { origin: 'bottom', delay: 500 });

/* ABOUT */
sr.reveal('.about__data', { origin: 'left' });
sr.reveal('.about__images img', { origin: 'right', interval: 200 });

/* SERVICES */
sr.reveal('.services__data');
sr.reveal('.service__card', { interval: 200 });

/* PROJECTS */
sr.reveal('.projects_container .project__card', { interval: 200 });

/* CONTACT */
sr.reveal('.contact__img', { origin: 'left' });
sr.reveal('.contact__card', { origin: 'right', interval: 200 });

/* FOOTER */
sr.reveal('.footer__container div', { interval: 200 });

