import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, events, activeClass) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.events = events;
    this.activeClass = activeClass;
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuButton.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuListener() {
    this.events.forEach(event => this.menuButton.addEventListener(event, this.openMenu));
  }

  init() {
    if (this.menuButton) {
      this.addMenuListener();
    }
  }
}
