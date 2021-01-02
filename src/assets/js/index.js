window.$ = window.jQuery = require('jquery');


document.addEventListener("DOMContentLoaded", function(event) {
});

$(document).ready(function() {
  // fix 100vh
  updateHeight()
  function updateHeight() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  // fix 100vw
  updateWidth()
  function updateWidth() {
    var vw = window.innerWidth-$(document).width();
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  }
  
})



// require module
// require('./module/example.js');