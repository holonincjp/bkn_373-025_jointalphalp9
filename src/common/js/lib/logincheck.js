import md5 from 'md5';

export default class loginCheck {
  
  constructor() {
    this.entryLogin();
    // this.visitLogin();
  }

  entryLogin() {
    const _loginCheckFunction = (directory, loginPadeId, passwordHash, accessDataWords) => {
      /**
       * login page(localStorage version)
       * md5.jsを使って暗号化はしているものの簡易的なもののため、個人情報等重要な情報を扱うページには利用しないこと
       * @description
       * 検証でlocalStorageのキーをクリアした時はlocalStorage.clear();の関数を適時使用していください
       * login page(cookie version)を使用する時は(localStorage version)を削除して使用してください
       */

      if (location.href.match(directory)) {
        const currentPage = document.querySelector('.currentPage').getAttribute('id');
        const loginPage = loginPadeId;
        const submitBtn = document.querySelector('#submit');
        const paswordBox = document.querySelector('#password');

        const pw = {};
        let inputData;

        pw.init = function() {
          // localStorageのキーの定義
          const limitedKey = window.localStorage.getItem(accessDataWords);
          if (currentPage == loginPage) {
            if (limitedKey != 'logined') {
              // 限定ログインページ初来訪時の処理
              submitBtn.addEventListener('click', function(event) {
                event.preventDefault();
                inputData = paswordBox.value;
                pw.auth(inputData); // パスワードが間違ってた時にリロードしてしまう処理を無効化
                return false;
              });
            } else {
              // 限定ログインページパスワード認証済みの処理
              window.localStorage.setItem(accessDataWords, 'logined');
              location.href = 'index.html';
            }
          } else {
            // 限定ページに直接遷移した時にクッキーを認証するための処理
            loginCheck(limitedKey, directory);
          }
        };

        pw.auth = function(value) {
          // md5の暗号を解読するための処理
          let str = md5(value);
          if (str == passwordHash) {
            window.localStorage.setItem(accessDataWords, 'logined');
            location.href = 'index.html';
          } else {
            alert('パスワードが間違っています');
          }
        };

        // eslint-disable-next-line no-inner-declarations
        function loginCheck(limitedKey, siteDir) {
          if (limitedKey != 'logined') {
            const urlArray = location.href.split(siteDir),
              innerPath = urlArray[1];
            let pathLayer = '';
            const pathCount = (innerPath.match(/\//g) || []).length;
            for (let i = 0; i < pathCount; i++) {
              pathLayer += '../';
            }
            location.href = pathLayer + 'entry/login.html';
          }
        } // パスワード処理初期化

        pw.init();
      }
    };
    _loginCheckFunction('entry', 'entryLogin', '66f6181bcb4cff4cd38fbc804a036db6', 'accessData_entry_template');
  }

  visitLogin() {
    const _visitLoginCheckFunction = (directory, loginPadeId, passwordHash, accessDataWords) => {
      /**
       * login page(localStorage version)
       * md5.jsを使って暗号化はしているものの簡易的なもののため、個人情報等重要な情報を扱うページには利用しないこと
       * @description
       * 検証でlocalStorageのキーをクリアした時はlocalStorage.clear();の関数を適時使用していください
       * login page(cookie version)を使用する時は(localStorage version)を削除して使用してください
       */

      if (location.href.match(directory)) {
        const currentPage = document.querySelector('.currentPage').getAttribute('id');
        const loginPage = loginPadeId;
        const submitBtn = document.querySelector('#submit');
        const paswordBox = document.querySelector('#password');

        const pw = {};
        let inputData;

        pw.init = function() {
          // localStorageのキーの定義
          const visitedKey = window.localStorage.getItem(accessDataWords);
          if (currentPage == loginPage) {
            if (visitedKey != 'logined') {
              // 限定ログインページ初来訪時の処理
              submitBtn.addEventListener('click', function(event) {
                event.preventDefault();
                inputData = paswordBox.value;
                pw.auth(inputData); // パスワードが間違ってた時にリロードしてしまう処理を無効化
                return false;
              });
            } else {
              // 限定ログインページパスワード認証済みの処理
              window.localStorage.setItem(accessDataWords, 'logined');
              location.href = 'index.html';
            }
          } else {
            // 限定ページに直接遷移した時にクッキーを認証するための処理
            loginCheck(visitedKey, directory);
          }
        };

        pw.auth = function(value) {
          // md5の暗号を解読するための処理
          let str = md5(value);
          if (str == passwordHash) {
            window.localStorage.setItem(accessDataWords, 'logined');
            location.href = 'index.html';
          } else {
            alert('パスワードが間違っています');
          }
        };

        // eslint-disable-next-line no-inner-declarations
        function loginCheck(visitedKey, siteDir) {
          if (visitedKey != 'logined') {
            const urlArray = location.href.split(siteDir),
              innerPath = urlArray[1];
            let pathLayer = '';
            const pathCount = (innerPath.match(/\//g) || []).length;
            for (let i = 0; i < pathCount; i++) {
              pathLayer += '../';
            }
            location.href = pathLayer + 'visit/login.html';
          }
        } // パスワード処理初期化

        pw.init();
      }
    };

    _visitLoginCheckFunction('visit', 'visitLogin', '66f6181bcb4cff4cd38fbc804a036db6', 'accessData_visit_template');
  }
}
