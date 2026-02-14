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

