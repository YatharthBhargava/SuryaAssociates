const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const list = document.getElementById('ImageList')

const itemWidth = 150;
const padding = 10;

prev.addEventListener('click',()=>{
    list.scrollLeft -= itemWidth + padding
})

next.addEventListener('click',()=>{
    list.scrollLeft += itemWidth + padding
})

var swiper = new Swiper(".mySwiper",{
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});