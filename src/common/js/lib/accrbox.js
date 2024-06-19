import { _breakP, _log } from './utils.js';
export default class accrBox {
  constructor() {
    this.accrFunc();
  }
  accrFunc() {
    const $accrBox = document.querySelectorAll('.js-txt-accordion');
    if ($accrBox.length) {
      $accrBox.forEach(elm => {
        elm.addEventListener('click', () => {
          elm.classList.toggle('is-open');
        });
      });
    }
  }
}
