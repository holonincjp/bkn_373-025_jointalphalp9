import { _breakP } from './utils.js';

export default class modal {
  constructor() {
    this.modalFunction();
  }

  modalFunction() {
    const $modalBtn = document.querySelectorAll('.js-modal');
    const $modalClose = document.querySelectorAll('.js-modal-close');

    if ($modalBtn.length) {
      $modalBtn.forEach(elm => {
        elm.addEventListener('click', event => {
          event.preventDefault();
          elm.nextElementSibling.classList.add('is-visible');
        });
      });

      $modalClose.forEach(elm => {
        elm.addEventListener('click', () => {
          elm.closest('.js-modal-item').classList.remove('is-visible');
        });
      });
    }
  }
}
