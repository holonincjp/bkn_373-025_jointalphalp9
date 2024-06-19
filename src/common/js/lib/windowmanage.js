import { _breakP, _ua, _browser } from './utils.js';
import throttle from 'lodash/throttle';
export default class windowManage {
  constructor() {
    this.viewportProcessing();
    // this.IESticky();

    if (_browser.edge || _browser.ie11) {
      this.IEModal();
      this.IEConversion();
    }
  }

  viewportProcessing() {
    let viewportContent;
    if (_ua.SP) {
      viewportContent = 'width=375';
      // eslint-disable-next-line quotes
      document.querySelector("meta[name='viewport']").setAttribute('content', viewportContent);
    }
    if (_ua.TB) {
      viewportContent = 'width=1064';
      // eslint-disable-next-line quotes
      document.querySelector("meta[name='viewport']").setAttribute('content', viewportContent);
    }
  }
  IESticky() {
    const $ieMessage = document.getElementById('ieMessage');
    const $ieMessageClose = document.querySelector('.ieMessage__close');
    const msgHeight = $ieMessage.clientHeight;
    const $gHeader = document.getElementById('gHeader');
    const $mansionSymbolDirect = document.querySelector('.mansionSymbol--direct');
    const $headerMenu = document.querySelector('.header-menu');

    let id = null;
    const interval = 300;
    let closeflag = true;

    const headerFix = function() {
      $gHeader.style.top = msgHeight + 'px';
      $gHeader.style.position = 'absolute';
      $gHeader.style.zIndex = '99';
      $gHeader.style.width = '100%';
      $mansionSymbolDirect.style.position = 'absolute';
      $headerMenu.style.position = 'absolute';
    };
    const headerRelease = function() {
      $gHeader.style.position = 'static';
      $mansionSymbolDirect.style.position = 'fixed';
      $headerMenu.style.position = 'fixed';
    };

    $ieMessageClose.addEventListener('click', () => {
      $ieMessage.classList.add('is-hidden');
      headerRelease();
      closeflag = false;
    });

    const scrollCallback = function() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      if (closeflag) {
        if (scrollTop < msgHeight) {
          headerFix();
        } else {
          headerRelease();
        }
      }
      const onEnded = function() {
        id = null;
      };
      clearTimeout(id);
      id = setTimeout(onEnded, interval);
    };
    const scbTime = 100;
    window.addEventListener('scroll', throttle(scrollCallback, scbTime));
    const init = function() {
      headerFix();
    };
    init();
  }
  IEModal() {
    const $currentPage = document.querySelectorAll('.currentPage')[0];
    let html = '';

    html += '<div id="ieModal" class="ieModal">';
    html += '<div id="ieMessage" class="ieMessage">';
    html +=
      '<p class="ieMessage__txt">このブラウザは動作保証対象外です。<br>当物件サイトを快適に閲覧していただくために、サポートされているブラウザへの切り替えをお願いします。<br>Windows10での閲覧については下記のブラウザを推奨しております。</p>';
    html += '<div class="ieMessage-btnGroup">';
    html += '<div class="ieMessage-recommentBtn">';
    html += '<a href="https://www.microsoft.com/ja-jp/edge" class="ieMessage-recommentBtn__link">';
    html += 'Microsoft Edge（最新版）';
    html += '</a>';
    html += '</div>';
    html += '<div class="ieMessage-recommentBtn">';
    html += '<a href="https://www.google.com/intl/ja_jp/chrome/" class="ieMessage-recommentBtn__link">';
    html += 'Google Chrome（最新版）';
    html += '</a>';
    html += '</div>';
    html += '<div class="ieMessage-recommentBtn">';
    html += '<a href="https://www.mozilla.org/ja/" class="ieMessage-recommentBtn__link">';
    html += 'Mozilla Firefox（最新版）';
    html += '</a>';
    html += '</div>';
    html += '</div>';
    html +=
      '<p class="ieMessage__txt">ダウンロードとインストール方法などにつきましては、ブラウザの提供元へお問い合わせください。</p>';
    html += '<div class="ieMessage__close"></div>';
    html += '</div>';
    html += '</div>';
    $currentPage.insertAdjacentHTML('afterbegin', html);

    const $ieModal = document.getElementById('ieModal');
    const $ieMessageClose = document.querySelector('.ieMessage__close');
    $ieMessageClose.addEventListener('click', () => {
      $ieModal.classList.add('is-hidden');
    });
  }
  IEConversion() {
    /* eslint-disable */
    function cvOpen() {
      var $cvMenuInner = document.querySelectorAll('.cvMenu__inner')[0];
      var $cvMenu = document.getElementById('cvMenu');
      var $cvButton = document.querySelectorAll('.js-cvBnr-button');
      var index;
      Array.prototype.forEach.call($cvButton, function(elm) {
        elm.addEventListener('click', function() {
          index = [].slice.call($cvButton).indexOf(elm);
          $cvMenu.classList.add('is-visible');
          disableBodyScroll($cvMenuInner);
        });
      });
    }

    function cvClose() {
      var $closeBtn = document.querySelectorAll('.js-cvBnr-close')[0];
      var $cvMenu = document.getElementById('cvMenu');
      $closeBtn.addEventListener('click', function() {
        $cvMenu.classList.remove('is-visible');
        clearAllBodyScrollLocks();
      });
    }

    function cvCorp() {
      var $corporateBlock = document.querySelectorAll('.cvMenu-corporateBlock');
      var $corporateArea = document.querySelectorAll('.cvMenu-corporateArea')[0];
      var cbLength = $corporateBlock.length;

      if (cbLength === 1) {
        $corporateArea.classList.add('cvMenu-corporateArea--noColumn');
      }
    }

    cvOpen();
    cvClose();
    cvCorp();
    /* eslint-enable */
  }
}
