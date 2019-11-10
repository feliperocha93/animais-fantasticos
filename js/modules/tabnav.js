export default class initTabNav {
  constructor(tabMenu, tabContent, events, activeClass) {
    this.tabMenu = document.querySelectorAll(tabMenu);
    this.tabContent = document.querySelectorAll(tabContent);
    this.events = events;
    this.activeClass = activeClass;
  }

  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direcao = this.tabContent[index].dataset.anime;
    console.log('ativando');
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  addTabListener() {
    this.tabMenu.forEach((itemMenu, index) => {
      this.events.forEach(event => itemMenu.addEventListener(event, () => this.activeTab(index)));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.tabContent[0].classList.add(this.activeClass);
      this.addTabListener();
    }
  }
}
