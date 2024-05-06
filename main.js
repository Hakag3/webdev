


// let mySlider = new Splide( '#mySlider', {
//     direction: 'ttb',
//     width  : '100%',
//     height : '65vh',
//     wheel    : true,
//   } );

// mySlider.mount();
 
document.addEventListener("DOMContentLoaded",function(){
  document.getElementById("burger").addEventListener("click", function(){
    document.querySelector(".header_nav").classList.toggle("open")
  })
})