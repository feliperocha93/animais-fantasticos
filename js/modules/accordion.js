export default class Accordion {
  constructor(accordionList, activeClass, events) {
    this.accordionList = document.querySelectorAll(accordionList);
    this.activeClass = activeClass;
    this.events = events;
  }

  toggleAccordion(accordion) {
    accordion.classList.toggle(this.activeClass);
    accordion.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvent() {
    this.accordionList.forEach((accordion) => {
      this.events.forEach((event) => {
        accordion.addEventListener(event, () => this.toggleAccordion(accordion));
      });
    });
  }

  init() {
    if (this.accordionList.length) {
      this.addAccordionEvent();
      this.toggleAccordion(this.accordionList[0]);
    }
  }
}
