window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-XXXXXXX-X');

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

//<!-- GetButton.io widget -->
//<script type="text/javascript">
(function () {
  var options = {
      whatsapp: "+1(407) 590-4196", // WhatsApp number
      call_to_action: "Send us a message", // Call to action
      position: "right", // Position may be 'right' or 'left'
      pre_filled_message: "Hello! I came across your website, Under Pressure Company!!!", // WhatsApp pre-filled message
  };
  var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
  var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
  s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
  var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();
//</script>
//<!-- /GetButton.io widget -->


// FORM GOOGLE SHEETS

const scriptURL = "https://script.google.com/macros/s/AKfycbwnDJvBPYqQKRwhR5Q0i-sd_0iEFmqjrd6KQTT6yGtEYjJH-IYRKA8mRo8-nFtMMQCQ/exec";                     

//"https://script.google.com/macros/s/AKfycbzfss7Af2hoY5KEOZmJTVlWdpQfTMPWLI3eZe17ioU/dev"; 
//"https://script.google.com/macros/s/AKfycbwkUJLRaiedLlSaizPmb18Ufok92vhTVF8B7M6FQA4daIxJXH0GYcsVQawpw9sI-amN/exec";

const form = document.forms["submit-to-google-sheet"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  var formData = new FormData(form);
  var terms = document.getElementById("terms").checked;
  var age = document.getElementById("age").checked;

  if (age) {
    formData.append("age", "Yes");
  } else {
    formData.append("age", "No");
  }
  if (terms) {
    formData.append("terms", "Yes");
  } else {
    formData.append("terms", "No");
  }

  fetch(scriptURL, { method: "POST", body: formData })
    .then((response) => {
      swal("Done", "Submitted Successfully.", "success");
    })
    .catch((error) => {
      swal("Error", "Something went wrong. please try again!", "error");
    });
});