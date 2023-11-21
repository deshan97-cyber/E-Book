

//search
const searchButton = document.getElementById('search-button'),
    searchClose = document.getElementById('search-close'),
    searchContent = document.getElementById('search-content')


if (searchButton) {
    searchButton.addEventListener('click', () => {
        searchContent.classList.add('show-search')
    })
}

if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchContent.classList.remove('show-search')
    })
}

//login
const loginButton = document.getElementById('login-button'),
    loginClose = document.getElementById('login-close'),
    loginContent = document.getElementById('login-content')


if (loginButton) {
    loginButton.addEventListener('click', () => {
        loginContent.classList.add('show-login')
    })
}

if (loginClose) {
    loginClose.addEventListener('click', () => {
        loginContent.classList.remove('show-login')
    })
}

// shadow header

const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader);

// scroll section active link

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown= window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId=current.getAttribute('id'),
        sectionClass= document.querySelector('.nav__menu a[href*='+sectionId + ']')

        if(scrollDown>sectionTop && scrollDown <= sectionTop+sectionHeight){
            sectionClass.classList.add('active-link')
        }
        else{
            sectionClass.classList.remove('active-link')
        }

    })


}


// scroll up

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')

}

window.addEventListener('scroll', scrollUp)


// dark light theme

const themeButton= document.getElementById('theme-button')
const darkTheme='dark-theme'
const iconTheme='ri-sun-line'

const selectedTheme=localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')

const getCurrrentTheme=()=>document.body.classList.contains(darkTheme) ? 'dark' :'light'
const getCurrrentIcon=()=>themeButton.classList.contains(iconTheme) ? 'ri-moon-line' :'ri-sun-line'

if(selectedTheme){

    document.body.classList[selectedTheme=='dark'? 'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon=='ri-moon-line' ? 'add' : 'remove'](iconTheme)

}

themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrrentTheme())
    localStorage.setItem('selected-icon',getCurrrentIcon())
})

// Scroll revel animation


const sr=ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true, animation repeat
})

sr.revel(`.home__data, .featured__container, .new__container, .join__data, .testimonial__container, .footer`)
sr.revel(`.home__images`,{delay:600})
sr.revel(`.services__card`,{interval:100})
sr.revel(`.discount__data`,{origin:'left'})
sr.revel(`.discount__images`,{origin:'right'})


// home-swiper

let swiperHome = new Swiper('.home__swiper',

    {
        loop: true,
        spaceBetween: -24,
        grabCursor: true,
        slidesPerView: "auto",
        centeredSlides: "auto",

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        breakpoints: {
            1220: {
                spaceBetween: -32,
            }
        }


    })


// featured swiper

let swiperfeature = new Swiper('.featured__swiper',

    {
        loop: true,
        spaceBetween: -24,
        grabCursor: true,
        slidesPerView: "auto",
        centeredSlides: "auto",

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',


        },


        breakpoints: {
            1150: {
                slidesPerView: 3,
                centeredSlides: false,
            }
        }


    })

// newbook swiper

let swipernewbook = new Swiper('.new__swiper',

    {
        loop: true,
        spaceBetween: 16,
        slidesPerView: "auto",
        centeredSlides: "auto",

        breakpoints: {
            1150: {
                slidesPerView: 3,
                centeredSlides: false,
            }
        }


    })

// testimonial swiper


let swiperTestimonial = new Swiper('.testimonial__swiper',

    {
        loop: true,
        spaceBetween: 16,
        grabCursor: true,
        slidesPerView: "auto",
        centeredSlides: "auto",

        breakpoints: {
            1150: {
                slidesPerView: 3,
                centeredSlides: false,
            }
        }


    })
