let section = document.getElementById('description')
section.className = 'description'

let container = document.createElement('div')
container.className = 'container'


let wrapper = document.createElement('div')
wrapper.className = 'description__wrapper'

let main = document.createElement('div')
main.className = 'description__main'

let title = document.createElement('div')
title.className = 'description__title', 'wow fadeIn'



title.innerHTML = `Responsible high-end jewelry <br> 
                    made in Montreal. MYEL <br>
                    creations are designed to <br>
                    stand the test of time.`

let subtitle = document.createElement('div')
subtitle.className = 'description__subtitle' , 'wow fadeInRight'
subtitle.innerHTML = 'Spontaneous, delicate, audacious, our jewels distinguish ' +
    'themselves with their elegance.'

let link = document.createElement('div')
link.className = 'description__link'
let a = document.createElement('a')
a.innerHTML = 'shop myle'

link.append(a)
main.append(title, subtitle)
wrapper.append(main, link)
container.append(wrapper)
section.append(container)


let prev = document.getElementsByClassName('slick-prev')
let next = document.getElementsByClassName('slick-next')

let prevBrowse = document.getElementsByClassName('browse-prev')
let nextBrowse = document.getElementsByClassName('browse-next')


$(document).ready(function () {
    $('.slider__main').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '40px',
        // autoplay: true,
        // speed: 1200,
        prevArrow: prev,
        nextArrow: next,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    prevArrow: prev,
                    nextArrow: next
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
    $('.header__login').on('click', function (e) {
        e.preventDefault()
        $('.overlay, .modal').fadeIn('slow')
    })
    $('.modal__close').on('click', function () {
        $('.overlay, .modal, .modal__alert').fadeOut('slow')
    })
    $('.modal__btn').on('click', function (e) {
        e.preventDefault()
        $('.modal__alert').fadeIn('slow')
        $('.modal').fadeOut(1)
    })
})

$(document).ready(function () {
    $('.browse__main').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // speed: 1200,
        prevArrow: prevBrowse,
        nextArrow: nextBrowse,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    prevArrow: prevBrowse,
                    nextArrow: nextBrowse,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })


})

$(document).ready(function () {
    $('.header__burger').on('click', function () {
        $('.header__burger,.header__second-list, .burger__item').toggleClass('active')
    })
});

// $('.header').setAttribute('data-aos', 'fade-down')

