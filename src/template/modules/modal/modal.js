import videojs from 'video.js'

export default class Modal {
  constructor() {
    this.ACTIVE = 'active';
    this.HIDDEN = 'hidden';
    this.PAGE_FROZE = 'froze';
    this.elements = document.querySelectorAll('.modal');
    this.buttonName = 'modal-open';
    if (this.elements) {
      this.page = document.querySelector('.page')
      this.elements.forEach(item => {
        this.init(item);
      })
    }
    this.buttons = document.querySelectorAll('.' + this.buttonName)
    if (this.buttons) {
      this.buttons.forEach((item) => {
        item.addEventListener('click', () =>{
          this.openModal(item.dataset.openModal);
        })
      })
    }
  }
  init(item) {
    const close = item.querySelector('.close');
    close.addEventListener('click', ()=>{
      this.closeModal(item)
    })
    item.addEventListener('click', (e) =>{
      const target = e.target;
      if (target.classList.contains('modal') || target.classList.contains('modal__inner')) {
        this.closeModal(item);
      }
    })
    
    item.addEventListener('animationend', () => {
      if (item.classList.contains(this.HIDDEN)) {
        item.classList.remove(this.ACTIVE); 
        item.classList.remove(this.HIDDEN); 
        this.page.classList.remove(this.PAGE_FROZE);
      }
    })
  }
  closeModal(item) {
    item.classList.add(this.HIDDEN);
    if (item.classList.contains('modal-video')) {
      const video = document.querySelector('.video-js');
      const player = videojs(video);
      player.pause()
      
    }
  }
  openModal(name) {
    let modal = document.querySelector('#modal-' + name);
    if (!modal) return;
    modal.classList.add(this.ACTIVE);
    this.page.classList.add(this.PAGE_FROZE);
  }
}