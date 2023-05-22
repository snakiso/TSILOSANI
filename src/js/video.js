
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

let video = document.querySelector('.hero__video');

video.addEventListener("loadeddata", () => {
  video.classList.remove('hero__video--hidden')
  video.play()
})