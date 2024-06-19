import { _breakP, _log } from './utils.js';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
export default class movie {
  constructor() {
    this.movieAction();
  }

  movieAction() {
    const $movieModalBtn = document.querySelectorAll('.js-movie-btn');
    const $movieModalInner = document.querySelectorAll('.movieModal__inner');
    const $ytPlayer = document.querySelectorAll('.js-yt-player');

    if ($movieModalBtn.length) {

      $movieModalBtn.forEach(elm => {
        elm.addEventListener('click', event => {
          event.preventDefault();
          elm.nextElementSibling.classList.add('is-visible');
          disableBodyScroll($movieModalInner);
        });
      });

      const $movieModalClose = document.querySelectorAll('.js-movie-modal-close');

      $movieModalClose.forEach(elm => {
        elm.addEventListener('click', () => {
          elm.closest('.modalItem').classList.remove('is-visible');
          enableBodyScroll($movieModalInner);
        });
      });
    }

    if ($movieModalBtn.length || $ytPlayer.length) {

      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = function () {

        if ($movieModalBtn.length) {
          $movieModalBtn.forEach(elm => {
            const dataYT = elm.closest('.movieModal').dataset.ytId;

            const ytArea = elm.closest('.movieModal').querySelector('.js-movie-frame');
            const ytWidth = 1260;
            const ytHeight = 708.75;

            const ytID = dataYT;
            const ytPlayer = new YT.Player(ytArea, {
              height: ytHeight,
              width: ytWidth,
              videoId: ytID,

              playerVars: {
                showinfo: 0,
                rel: 0,
                origin: location.protocol + '//' + location.hostname + '/'
              },
              events: {
                onReady: onPlayerReady
              }
            });
            elm.addEventListener('click', event => {
              ytPlayer.playVideo();
            });

            elm
              .closest('.movieModal')
              .querySelectorAll('.js-movie-modal-close')[0]
              .addEventListener('click', () => {
                ytPlayer.pauseVideo();
              });

            let ytReady = false;
            function onPlayerReady(e) {
              ytReady = true;
            }
          });
        }

        if ($ytPlayer.length) {
          const ytArea = document.querySelectorAll('.js-yt-player');
          ytArea.forEach(elm => {
            const ytFrame = elm.querySelector('.js-yt-frame');
            const datas = elm.dataset;
            const dataId = datas.ytId;
            const dataWidth = datas.ytWidth;
            const dataHeight = datas.ytHeight;
            const dataAutoplay = datas.ytAutoplay === 'true' ? 1 : 0;
            const dataControls = datas.ytControls === 'false' ? 0 : 1;
            const dataFs = datas.ytFs === 'false' ? 0 : 1;
            const dataLoop = datas.ytLoop === 'true' ? 1 : 0;
            const dataRel = datas.ytRel === 'false' ? 0 : 1;

            const ytPlay = new YT.Player(ytFrame, {
              width: dataWidth,
              height: dataHeight,
              videoId: dataId,

              playerVars: {
                autoplay: dataAutoplay,
                controls: dataControls,
                fs: dataFs,
                loop: dataLoop,
                playlist: dataId,
                rel: dataRel,
                origin: location.protocol + '//' + location.hostname + '/'
              },
              events: {
                // eslint-disable-next-line no-use-before-define
                onReady: onPlayerReady
              }
            });

            function onPlayerReady(e) {
              if (dataAutoplay) {
                e.target.mute();
                e.target.playVideo();
              }
            }
          });
        }
      };
    }
  }
}
