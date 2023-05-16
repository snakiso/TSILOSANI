let swiper = undefined;
let swiper2 = undefined;
function initSwiperCategory() {
  var screenWidth = window.innerWidth;
  if (screenWidth < 600 && swiper == undefined) {
    swiper = new Swiper('.cards-slider', { //СВАЙПЕР ПЕРВЫЙ
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 'auto',
      spaceBetween: 10,
      autoWidth: false,
      centeredSlides: true,
      loop: true,
    });

    swiper2 = new Swiper('.cards-slider-2', { //СВАЙПЕР С ЦЕНАМИ
      pagination: {
        el: '.swiper-pagination-1',
        clickable: true,
      },
      slidesPerView: 'auto',
      spaceBetween: 10,
      autoWidth: false,
      centeredSlides: true,
      loop: true,
    });
  } else if (screenWidth >= 600 && swiper != undefined) {
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
  centeredSlides: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});