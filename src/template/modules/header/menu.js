//  $('.burger').on('click', function() {
//    if ($(".header").hasClass('active')) {
//      $(this).removeClass('active')
//      $(".header").removeClass('active')
//    } else {
//      $(this).addClass('active')
//      $(".header").addClass('active')
//    }
//  })

export default class Menu {
  constructor() {
    this.CLASS_ACTIVE = 'active';
    this.CLASS_HIDDEN = 'hidden';
    this.PAGE_FROZE = 'froze';
    this.init();
    
  }
  init() {
    this.burger = document.querySelector('.burger');
    this.menu = document.querySelector('.menu-mobile');
    this.hiddenContent = document.querySelector('.hidden-content');
    this.header = document.querySelector('.header');
    this.page = document.querySelector('.page')
    if (this.burger && this.menu) {
     this.events();
    }
  }
  events() {
    this.burger.addEventListener('click', () => {
      if (this.burger.classList.contains(this.CLASS_ACTIVE)) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    })
    this.hiddenContent.addEventListener('click', () => {
      this.closeMenu();
    })
    
    this.hiddenContent.addEventListener('animationend', () => {
      if (this.hiddenContent.classList.contains(this.CLASS_HIDDEN)) {
        this.hiddenContent.classList.remove(this.CLASS_ACTIVE); 
        this.hiddenContent.classList.remove(this.CLASS_HIDDEN); 
      }
    })
    this.menu.addEventListener('animationend', () => {
      if (this.menu.classList.contains(this.CLASS_HIDDEN)) {
        this.menu.classList.remove(this.CLASS_ACTIVE); 
        this.menu.classList.remove(this.CLASS_HIDDEN); 
        this.header.classList.remove(this.CLASS_ACTIVE);
      }
    })
  
  }
  
  openMenu() {
    
    this.hiddenContent.classList.remove(this.CLASS_HIDDEN); 
    this.menu.classList.remove(this.CLASS_HIDDEN); 
    this.hiddenContent.classList.add(this.CLASS_ACTIVE);
    this.burger.classList.add(this.CLASS_ACTIVE);
    this.menu.classList.add(this.CLASS_ACTIVE);
    this.header.classList.add(this.CLASS_ACTIVE);
    if (window.innerWidth < 576) {
      this.page.classList.add(this.PAGE_FROZE);
    }
  }
  
  closeMenu() {
    this.burger.classList.remove(this.CLASS_ACTIVE);
    if (window.innerWidth < 576) {
      this.header.classList.remove(this.CLASS_ACTIVE);
      this.hiddenContent.classList.remove(this.CLASS_ACTIVE);
      this.menu.classList.remove(this.CLASS_ACTIVE); 
    } else {
      this.hiddenContent.classList.add(this.CLASS_HIDDEN);
      this.menu.classList.add(this.CLASS_HIDDEN);
    }
    this.page.classList.remove(this.PAGE_FROZE);
  }
}