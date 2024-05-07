





document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector(".header_nav").classList.toggle("open")
  })
})



const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: false,
  speed: 1000,
  direction: "vertical",
  slidesPerView: "auto",
 
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
   
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});
