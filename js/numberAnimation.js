let numbers1 = document.querySelectorAll('.count-number--1');
let numbers2 = document.querySelectorAll('.count-number--2');
let numberBlock = document.querySelector('.details__inner');
let expBlock = document.querySelector('.exp__container');



for (let i = 0; i < numbers1.length; i++) {
  $(document).ready(function () {
    var show = true;
    $(window).on("scroll load resize", function () {
      if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
      let b_height = $(numberBlock).outerHeight() // высота общего блока
      let w_height = $(window).height(); // Высота окна браузера
      if (numbers1[i].getBoundingClientRect().top <= ((w_height / 1.2) + (b_height / 2))) {
        $(numbers1[i]).css('opacity', '1');
        $(numbers1[i]).spincrement({
          thousandSeparator: ' ',
          duration: 3000
        });
        show = false;
      }
    });
  });
}
// // //
// // //
for (let i = 0; i < numbers2.length; i++) {
  $(document).ready(function () {
    var show = true;
    $(window).on("scroll load resize", function () {
      if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
      let b_height = $(expBlock).outerHeight() // высота общего блока
      let w_height = $(window).height(); // Высота окна браузера
      if (numbers2[i].getBoundingClientRect().top <= ((w_height / 1.2) + (b_height / 2))) {
        $(numbers2[i]).css('opacity', '1');
        $(numbers2[i]).spincrement({
          thousandSeparator: ' ',
          duration: 3000
        });
        show = false;
      }
    });
  });
}


