let swiper = undefined;
let swiper2 = undefined;
let swiperEl = document.querySelectorAll('.cards__card--copy');
let swiperArr = document.querySelector('.cards__wrapper--copy');
function initSwiperCategory() {
  var screenWidth = window.innerWidth;
  if (screenWidth < 600 && swiper == undefined) {
    swiper = new Swiper('.cards-slider', { //СВАЙПЕР ПЕРВЫЙ
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 10,
      autoWidth: false,
      centeredSlides: true,
      initialSlide: 1,
    });

    for (let i = 0; i < array.length; i++) {
      $(".cards__card--copy").clone().appendTo(".cards__wrapper--copy");
    }

    swiper2 = new Swiper('.cards-slider-2', { //СВАЙПЕР С ЦЕНАМИ
      pagination: {
        el: '.swiper-pagination-1',
        clickable: true,
      },
      slidesPerView: 'auto',
      autoplay: {
        speed: 1000,
      },
      spaceBetween: 10,
      autoWidth: false,
      centeredSlides: true,
      loop: false,
    });
  } else if (screenWidth >= 600 && swiper != undefined) {

    $('.cards__wrapper--copy').children().slice(3).remove()
    swiper.destroy();
    swiper = undefined;
    swiper2.destroy();
    swiper2 = undefined;
  }
}
$(document).ready(function () {
  initSwiperCategory();
}); //Проверка при загрузке страницы

$(window).on('resize', function () {
  initSwiperCategory();
}); //Запуск функции при изменении размера

const swiper3 = new Swiper('.reviews-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 50,
  autoWidth: false,
  speed: 2000,
  centeredSlides: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



const swiper4 = new Swiper('.filmstrip-slider', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: -1,
  autoWidth: false,
  centeredSlides: true,
  freemode: true,
  speed: 8000,
  autoplay: {
    delay: 10,
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      centeredSlides: false,
    },
  },
  pagination: {
    el: '.filmstrip__pagination',
    clickable: true,
  },
});

