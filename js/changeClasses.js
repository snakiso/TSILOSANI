let cardSlides = document.querySelectorAll('.cards__card--slide');


function removeAttr() {
  var screenWidth = window.innerWidth;
  if (screenWidth < 800) {
    for (let i = 0; i <= cardSlides.length; i++) {
      if (cardSlides[i].classList.contains('fadeInRight')) {
        cardSlides[i].classList.remove('fadeInRight');
        cardSlides[i].style.transitionDuration = '0s';
      }else{
        break
      }
    }
  }
}
removeAttr()

$(window).on('resize', function () {
  removeAttr()
}); //Запуск функции при изменении размера