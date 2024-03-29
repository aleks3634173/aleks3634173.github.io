import $ from 'jquery'
import Form from '_components/form/form'
import Modal from '_module/modal/modal'
import Menu from '_module/header/menu'
import jqueryValidation from 'jquery-validation'
import 'slick-carousel'
import 'video.js'
import 'videojs-youtube'

document.addEventListener("DOMContentLoaded", function(event) {
  new Form()
  new Modal()
  new Menu()

  // We listen to the resize event
  window.addEventListener('resize', updateHeight);
  updateHeight()
  function updateHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  var $form = $('.form');
  $.validator.addMethod("lettersonly", function(value, element) {
     return this.optional(element) || /^[a-zА-Я\s]+$/i.test(value);
  });
  $.validator.addMethod("numberonly", function(value, element) {
     return this.optional(element) || /^[0-9]+$/i.test(value);
  });
  var rulesObj = {
      name: {
          required: true,
          minlength:3,
          maxlength:50,
          lettersonly: true
      },
      email: {
          required: true,
          email: true
      },
      message: {
          required: true,
          minlength:10,
      },
      subject: {
          required: true,
          minlength:3,
          maxlength:10,
      },
  }
  $form.each(function(k,v) {
       //    var $this = $(this);
       $(this).validate({

            rules: rulesObj,
            errorPlacement: function(error, element) {
                return false;  // no message placement
            },
            invalidHandler: function(form, validator) {
              this.classList.add('error');
            },
//
//             submitHandler: function(form) {
//               var formData = new FormData(form);
//               $.ajax({
//                 type: "POST",
//                 url: "mail.php",
//                 data: formData,
//                 contentType: false,
//                 dataType: "json",
//                 processData: false,
//                 beforeSend: function() {
//                   $(form).find('.btn').attr("disabled", true);
//                   $(form).find('.form-load').css({
//                     'width': '20px',
//                     'margin-left': '10px'
//                   });
//                   console.log('before send')
//                 }
//               }).done(function() {
//                 $(form).find('.btn').attr("disabled", false);
//                 $(form).find('.form-load').css({
//                   'width': '0',
//                   'margin-left': '0'
//                 });
//                 $(form).trigger("reset");
//                     // $.magnificPopup.close();
//                     $.fancybox.close();
//                     //window.location.href = "thanks.html";
//                     console.log('done')
//                   }).fail(function() {
//                     alert("Error, email not sent !");
//                     console.log('error')
//                   });
//                 }
             });
     });
	
  
   $('.testimonials__profiles').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testimonials__slider',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    variableWidth: true,
    centerMode: true,
    infinite: true,
    responsive: [
    ]
    
  });
  $('.testimonials__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    asNavFor: '.testimonials__profiles',
    adaptiveHeight: true,
    responsive: [
    ]
  });
});

// require module
// require('./module/example.js');