import debounce from './debounce';

export default class ScrollAnimacao {
  constructor(sections, events, activeClass) {
    this.sections = document.querySelectorAll(sections);
    this.events = events;
    this.activeClass = activeClass;
    this.windowMetade = window.innerHeight * 0.6;
    this.animaScroll = debounce(this.animaScroll.bind(this), 50);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - this.windowMetade) < 0;
      if (isSectionVisible) {
        section.classList.add(this.activeClass);
      } else if (section.classList.contains(this.activeClass)) {
        section.classList.remove(this.activeClass);
      }
    });
  }

  addScrollListener() {
    window.addEventListener(this.events, this.animaScroll);
  }

  init() {
    if (this.sections.length) {
      this.addScrollListener();
    }
  }
}
