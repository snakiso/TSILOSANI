
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

let video = document.querySelector('.hero__video');

video.addEventListener("loadeddata", () => {
  video.classList.remove('hero__container--hidden')
  video.play()
})


function ChangeVideo() {
  var screenWidth = window.innerWidth;
  if (screenWidth < 600) {
    video.src = 'files/MobileVersion.mp4'
  } else if (screenWidth >= 600) {
    video.src = 'files/Desktop.mp4'
  }
}
$(document).ready(function () {
  ChangeVideo();
}); //Проверка при загрузке страницы

$(window).on('resize', function () {
  ChangeVideo();
}); //Запуск функции при изменении размера