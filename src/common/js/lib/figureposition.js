import { _breakP, _log } from './utils.js';
export default class figurePosition {
  constructor() {
    if (_breakP.SP) {
      this.figurePosition();
    }
  }

  figurePosition() {
    window.addEventListener('load', function () {
      const $swipeFigure = document.querySelectorAll('.touchFigure--swipe');
      if ($swipeFigure.length) {
        $swipeFigure.forEach(elm => {
          const halfValue = 2;
          const elmImage = elm.querySelector('.touchFigure__image');
          const elmInner = elm.querySelector('.touchFigure__inner');
          const elmW = elmImage.clientWidth;
          const elmHW = elmW / halfValue / halfValue;
          let initPos = 0;
          if (elmInner.classList.contains('js-figPosition-center')) {
            initPos = elmHW;
          }
          if (elmInner.classList.contains('js-figPosition-right')) {
            initPos = elmW;
          }
          elmInner.scrollLeft = initPos;
        });
      }
    });
  }
}
