import outsideClick from './outsideclick.js';

export default class DropDownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add('active');
    outsideClick(element, this.events, () => {
      element.classList.remove('active');
    });
  }

  addDropdownListener() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach(event => menu.addEventListener(event, this.handleEvent));
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownListener();
    }
    return this;
  }
}
