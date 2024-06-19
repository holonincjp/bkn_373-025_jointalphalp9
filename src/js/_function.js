import smoothscroll from 'smoothscroll-polyfill';
export default class top {
  constructor() {
    this.normalAccordion();
    this.accordionClose();
  }

  // topFunc(TOPページの関数)
  normalAccordion() {
    const elms = document.querySelectorAll('.js-top-accordion');
    elms.forEach(elm => {
      elm.addEventListener('click', () => {
        elm.parentNode.classList.toggle('is-open');
      });
    });
  }
  accordionClose() {
    smoothscroll.polyfill();
    const elms = document.querySelectorAll('.js-top-accordion-close');
    let index;
    elms.forEach(elm => {
      elm.addEventListener('click', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const activeCheck = elm.parentNode.classList.contains('is-open');
        index = [].slice.call(elms).indexOf(elm);
        elm.parentNode.classList.toggle('is-open');
        const elmH = elm.previousElementSibling.previousElementSibling.clientHeight;
        const rect = elm.previousElementSibling.previousElementSibling.getBoundingClientRect();
        const targetPosition = scrollTop + rect.top + elmH;
        // eslint-disable-next-line no-magic-numbers
        const buffer = window.innerHeight / 4;
        if (activeCheck) {
          window.scrollTo({
            top: targetPosition - buffer,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}
