export default class initModal {
  constructor(botaoAbrir, botaoFechar, containerModal, events, activeClass) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
    this.events = events;
    this.activeClass = activeClass;
    this.toggleModal = this.toggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  toggleModal(event) {
    event.preventDefault();
    this.containerModal.classList.toggle(this.activeClass);
  }

  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }

  addModalListeners() {
    [this.botaoAbrir, this.botaoFechar].forEach((item) => {
      this.events.forEach(event => item.addEventListener(event, this.toggleModal));
    });
    this.events.forEach(event => this.containerModal.addEventListener(event, this.cliqueForaModal));
  }

  init() {
    if (this.containerModal) {
      this.addModalListeners();
    }
  }
}
