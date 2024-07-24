//  Script para navegação bar com efeito de on scroll - sticky 

window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle('sticky', window.scrollY > 0);
});


//Script para Navigation sidebar menu responsivo

var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
	menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
	menu.classList.remove('active');
});



//Script para Image Comparison Slider(Before / After)
// Tilt Effect - vanilla-tilt.js (https://micku7zu.github.io/vanilla-tilt.js/) is required for this
VanillaTilt.init(document.querySelectorAll("#image-comparison-slider"), { 
	max: 9, // max tilt rotation (degrees (deg))
	speed: 7, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
	scale: 1.02 // transform scale - 2 = 200%, 1.5 = 150%, etc..
});


  /*  
  const slider = document.querySelector("#image-comparison-slider");
  const sliderImgWrapper = document.querySelector("#image-comparison-slider .img-wrapper");
  const sliderHandle = document.querySelector("#image-comparison-slider .handle");
  */

  document.querySelectorAll(".image-comparison-slider").forEach(slider => {
    const sliderImgWrapper = slider.querySelector(".img-wrapper");
    const sliderHandle = slider.querySelector(".handle");

    let isSliderLocked = false;


  slider.addEventListener("mousemove", sliderMouseMove);
  slider.addEventListener("touchmove", sliderMouseMove);

  function sliderMouseMove(event) {
    if(isSliderLocked) return;
    
    const sliderLeftX = slider.offsetLeft;
    const sliderWidth = slider.clientWidth;
    const sliderHandleWidth = sliderHandle.clientWidth;
    
    let mouseX = (event.clientX || event.touches[0].clientX) - sliderLeftX;
    if(mouseX < 0) mouseX = 0;
    else if(mouseX > sliderWidth) mouseX = sliderWidth;
    
    sliderImgWrapper.style.width = `${((1 - mouseX/sliderWidth) * 100).toFixed(4)}%`;
    sliderHandle.style.left = `calc(${((mouseX/sliderWidth) * 100).toFixed(4)}% - ${sliderHandleWidth/2}px)`;
  }

  //let isSliderLocked = false;

  slider.addEventListener("mousedown", sliderMouseDown);
  slider.addEventListener("touchstart", sliderMouseDown);
  slider.addEventListener("mouseup", sliderMouseUp);
  slider.addEventListener("touchend", sliderMouseUp);
  slider.addEventListener("mouseleave", sliderMouseLeave);

  function sliderMouseDown(event) {
    if(isSliderLocked) isSliderLocked = false;
    sliderMouseMove(event);
  }

  function sliderMouseUp() {
    if(!isSliderLocked) isSliderLocked = true;
  }

  function sliderMouseLeave() {
    if(isSliderLocked) isSliderLocked = false;
  }
});
