export default class Form {
  constructor() {
    this.placeinput = document.querySelectorAll('.placeinput');
    this.placetextarea = document.querySelectorAll('.placetextarea');
    if (this.placeinput.length !== 0) {
      this.placeinput.forEach(item => {
        const input = item.querySelector('input');
        this.update(item, input);
        input.onchange = () => {
          this.update(item, input);
        }
        input.onfocus = () => {
          this.add(item, input);
        }
        input.onblur = () => {
          this.update(item, input); 
        }
      })
    }
    if (this.placetextarea.length !== 0) {
      this.placetextarea.forEach(item => {
        const input = item.querySelector('textarea');
        this.update(item, input);
        input.onchange = () => {
          this.update(item, input);
        }
        input.onfocus = () => {
          this.add(item, input);
        }
        input.onblur = () => {
          this.update(item, input);
        }
      })
    }
  }
  
  update(parent, item) {
    if (item.value.length === 0) {
      parent.classList.remove('active');
    } else {
      parent.classList.add('active');
    }
  }
  add(parent,item) {
      parent.classList.add('active');
  }
  remove(parent,item) {
      parent.classList.remove('active');
  }
}