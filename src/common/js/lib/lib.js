import windowManage from './windowmanage.js';
import { _log } from './utils.js';
import loginCheck from './loginCheck.js';
import common from './common.js';
import 'lazysizes';
import figurePosition from './figureposition.js';
import accrBox from './accrbox.js';
import modal from './modal.js';
import movie from './movie.js';
import contentMenu from './contentmenu.js';
import _breakP from './utils.js';
import top from '../../../js/_function.js';
// // eslint-disable-next-line

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const $menuBtn = document.querySelectorAll('.js-contentMenu-button');
    new windowManage();
    new loginCheck();
    if ($menuBtn.length) {
      new contentMenu();
    }
    new common();
    new figurePosition();
    new accrBox();
    new modal();
    new movie();

    const $pageId = document.getElementsByClassName('currentPage')[0];

    switch ($pageId.getAttribute('id')) {
      case 'top':
        _log('PAGE NAME', 'INDEX', 'orange');

        new top();

        break;
      case 'interactionPattern':
        break;
      default:
    }
  },
  false
);
