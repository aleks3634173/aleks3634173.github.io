window.$ = window.jQuery = require('jquery');
import 'slick-carousel'
const fancybox = require('@fancyapps/fancybox')

document.addEventListener("DOMContentLoaded", function(event) {
});


$(document).ready(function() {
  // fix 100vh
  updateHeight()
  function updateHeight() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  // fix 100vw
  updateWidth()
  function updateWidth() {
    var vw = window.innerWidth-$(document).width();
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  };
  
  $(".sevives__slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      infinite: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            variableWidth: true,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            variableWidth: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            variableWidth: true,
          }
        },
        {
          breakpoint: 540, 
          settings: "unslick",
        }
      ]
    });  
  $(".sevives__slider").on('wheel', (function(e) {
      e.preventDefault();
      if (e.originalEvent.deltaY < 0) {
        $(this).slick('slickNext');
      } else {
        $(this).slick('slickPrev');
      }
    }));
  
  $(".tabs__list").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    variableWidth: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          variableWidth: true,
          infinite: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          variableWidth: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          variableWidth: true,
          infinite: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          variableWidth: true,
          infinite: false,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          variableWidth: true,
          infinite: false,
        }
      },
    ]
  });
  $(".tabs__list").on('wheel', (function(e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
  }));
  
  $(".doctors__list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    asNavFor: '.doctors-panel__list',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          centerMode: true,
          variableWidth: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          centerMode: true,
          variableWidth: true,
        }
      }
    ]
  });
  
  $(".doctors-panel__list").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    asNavFor: '.doctors__list',
    vertical: true,
    prevArrow: $('#doctors-slick-arrows .slick-arrows__left'),
    nextArrow: $('#doctors-slick-arrows .slick-arrows__right'),
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
    ]
  });
  
  $(".content-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    asNavFor: '#equipment-gallery-panel',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          infinite: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          infinite: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          infinite: false,
        }
      },
    ]
  });
  
  $(".doctors-panel__list").on('wheel', (function(e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
  }));

  $(".gallery-panel").on('init', function (event, slick) {
    $(this).append(`<div class="slick-counter">1 из ${slick.slideCount}</div>`);
  });
  
  $(".gallery-panel").on('breakpoint', function (event, slick) {
    $(this).append(`<div class="slick-counter">1 из ${slick.slideCount}</div>`);
  });
  
  $("#gallery-panel-history").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.slider-info',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          infinite: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          variableWidth: true,
          infinite: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          infinite: false,
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          variableWidth: true,
          infinite: false,
        }
      },
    ]
  });
  $("#equipment-gallery-panel").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.content-slider',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          infinite: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          variableWidth: true,
          infinite: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          infinite: false,
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          variableWidth: true,
          infinite: false,
        }
      },
    ]
  });
  
  $(".gallery-panel").on('afterChange', function (event, slick, currentSlide) {
      $(this).find('.slick-counter').text(currentSlide + 1 + ' из ' + slick.slideCount)
    });
  
  $(".whyarewe__list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          variableWidth: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          variableWidth: true,
        }
      },
    ]
  });
  
  $(".video-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    asNavFor: '.panel-slider',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
    ]
  });
  
  $(".panel-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    asNavFor: '.video-slider',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          infinite: false,
          variableWidth: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          infinite: false,
          variableWidth: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          infinite: false,
          variableWidth: true,
        }
      },
    ]
  }); 
  
  $('.dropdown').each(function(index, item) {
    $(this).find('.dropdown__open').click(function() {
      $(item).toggleClass('active')
    })
  })
  
  $(".news__list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          infinite: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          infinite: false,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          infinite: false,
        }
      },
    ]
  });
  
  $(".gallery-line").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          variableWidth: true,
          centerMode: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          variableWidth: true,
          centerMode: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          variableWidth: true,
          centerMode: true,
        }
      },
    ]
  });
  
  $(".comments__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    asNavFor: '.comments-panel',
    swipe: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          swipe: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
    swipe: true,
        }
      }
    ]
  });
  
  $(".comments-panel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    asNavFor: '.comments__slider',
    variableWidth: true,
    centerMode: true,
    focusOnSelect: true,
    infinite: false,
    prevArrow: $('#comments-slick-arrows .slick-arrows__left'),
    nextArrow: $('#comments-slick-arrows .slick-arrows__right'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          variableWidth: true,
          centerMode: true,
          focusOnSelect: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          variableWidth: true,
          centerMode: true,
          focusOnSelect: true,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          variableWidth: true,
          centerMode: true,
          focusOnSelect: true,
          infinite: true,
        }
      }
    ]
  });
  
  $(".slider-info").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    asNavFor: '#gallery-panel-history',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          swipe: false,
          infinite: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          swipe: false,
          dots: false,
          infinite: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          swipe: false,
          infinite: false,
        }
      },
    ]
  });
  
  $(".slider-info__list").slick({
      responsive: [
        {
          breakpoint: 2000,
          settings: "unslick",
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            adaptiveHeight: true,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            adaptiveHeight: true,
            variableWidth: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            adaptiveHeight: true,
            variableWidth: true
          }
        },
      
      ]
    });
  $(".documents__list").on('init', function (event, slick) {
    $(this).append(`<div class="slick-counter">1 из ${slick.slideCount}</div>`);
  });
  
  $(".documents__list").on('breakpoint', function (event, slick) {
    $(this).append(`<div class="slick-counter">1 из ${slick.slideCount}</div>`);
  });
  $(".documents__list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow: $('#documents-slick-arrows .slick-arrows__left'),
    nextArrow: $('#documents-slick-arrows .slick-arrows__right'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          infinite: false,
          variableWidth: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          infinite: false,
          variableWidth: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          infinite: false,
          variableWidth: true,
          infinite: true,
          centerMode: true,
        }
      },
    ]
  });

  $(".documents__list").on('afterChange', function (event, slick, currentSlide) {
    $(this).find('.slick-counter').text(currentSlide + 1 + ' из ' + slick.slideCount)
  });
  
  $(".promo-slider__list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: '',
    nextArrow: '<button type="button" class="slick-next"><svg class="icon icon-arrow2"><use xlink:href="assets/img/svg/sprite.svg#arrow-right2"></use></svg></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          infinite: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          variableWidth: true,
          centerMode: true,
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          variableWidth: true,
        }
      }
    ]
  });
  
  $('.search-form__close').click(function() {
    $('.header__search-form').addClass('disabled')
  });
  
  $('.btn-search').click(function() {
    $('.header__search-form').addClass('active')
  });
  
  $('.header__search-form').on('animationend', function() {
    if ($(this).hasClass('disabled')) {
      $('.header__search-form').removeClass('active')
      $('.header__search-form').removeClass('disabled')
    }
  });
  
  $('.header__burger').click(function() {
    if ($('.mobile-menu').hasClass('active')) {
      $('.mobile-menu').addClass('disabled')
    } else {
      $('.mobile-menu').addClass('active')
      $(this).addClass('active')
      $("html, body").animate({ scrollTop: 0 }, 600)
      $('.page').addClass('frozy')
    }
  });
  
  $('.mobile-menu').on('animationend', function() {
    if ($(this).hasClass('disabled')) {
      $('.mobile-menu').removeClass('active')
      $('.mobile-menu').removeClass('disabled')
      $('.header__burger').removeClass('active')
      $('.page').removeClass('frozy')
    }
  });
  
  $(".safety-list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          infinite: false,
          variableWidth: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          variableWidth: true,
          infinite: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          variableWidth: true,
          infinite: false
        }
      },
    ]
  });
  $(".features__list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    variableWidth: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 2000,
        settings: "unslick",
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          variableWidth: true,
          infinite: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          variableWidth: true,
          infinite: true
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          variableWidth: true,
          infinite: true
        }
      },
    ]
  });
  
})



// require module
// require('./module/example.js');