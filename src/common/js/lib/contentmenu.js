import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { _breakP, _log } from './utils.js';
export default class contentMenu {
  constructor() {
    this.contentMenu();
    if (_breakP.SP) {
      this.contentMenuAccordion();
    }
  }

  contentMenu() {
    const $menuBtn = document.querySelectorAll('.js-contentMenu-button')[0];
    const $contentMenu = document.querySelectorAll('.contentMenu')[0];

    $menuBtn.addEventListener('click', function() {
      if (this.classList.contains('is-active')) {
        $contentMenu.classList.remove('is-visible');
        clearAllBodyScrollLocks();
      } else {
        $contentMenu.classList.add('is-visible');
        disableBodyScroll($contentMenu);
      }
      this.classList.toggle('is-active');
    });
  }

  contentMenuAccordion() {
    const elms = document.querySelectorAll('.js-contentMenu-accordion');
    let index;
    elms.forEach(elm => {
      elm.addEventListener('click', () => {
        index = [].slice.call(elms).indexOf(elm);
        elm.classList.toggle('is-active');
        elm.nextElementSibling.classList.toggle('is-open');
      });
    });
  }
}
