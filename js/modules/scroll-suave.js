export default class ScrollSuave {
  constructor(linksInternos, events) {
    this.linksInternos = document.querySelectorAll(linksInternos);
    this.events = events;
    this.scrollOptions = { behavior: 'smooth', block: 'start' };
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.scrollOptions);
    return this;
  }

  addLinksListener() {
    this.linksInternos.forEach((link) => {
      this.events.forEach(event => link.addEventListener(event, this.scrollToSection));
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinksListener();
    }
  }
}
