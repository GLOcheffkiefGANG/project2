
///CArouSEL
const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    startPosition: 1,
    items: 3,
    
    responsive : {


        850 : {
        startPosition: 1,   
        items: 1,   
        },

        1000 : {
        margin: 20,
        items: 2,            
        },

        1200 : {

        }
    }
});
$('.slider_btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slider_btn--next').click(function() {
    owl.trigger('next.owl.carousel');
});
///nav icon

const navBtn = document.querySelector('.nav_toggle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function () {
    nav.classList.toggle('nav--mobile');
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll');
};

