/******
	ユーザーエージェント判別
*******/
const _ua = (u => {
  const negativeNum = -1;
  return {
    TB:
      (u.indexOf('windows') !== negativeNum &&
        u.indexOf('touch') !== negativeNum &&
        u.indexOf('tablet pc') === negativeNum) ||
      u.indexOf('ipad') !== negativeNum ||
      (u.indexOf('android') !== negativeNum && u.indexOf('mobile') === negativeNum) ||
      (u.indexOf('firefox') !== negativeNum && u.indexOf('tablet') !== negativeNum) ||
      u.indexOf('kindle') !== negativeNum ||
      u.indexOf('silk') !== negativeNum ||
      u.indexOf('playbook') !== negativeNum,
    SP:
      (u.indexOf('windows') !== negativeNum && u.indexOf('phone') !== negativeNum) ||
      u.indexOf('iphone') !== negativeNum ||
      u.indexOf('ipod') !== negativeNum ||
      (u.indexOf('android') !== negativeNum && u.indexOf('mobile') !== negativeNum) ||
      (u.indexOf('firefox') !== negativeNum && u.indexOf('mobile') !== negativeNum) ||
      u.indexOf('blackberry') !== negativeNum
  };
})(window.navigator.userAgent.toLowerCase());

/******
	ブラウザ判別
*******/
const _browser = (u => {
  const negativeNum = -1;
  return {
    ie11: u.indexOf('trident/7') > negativeNum,
    edge: u.indexOf('edge') > negativeNum,
    ie: (u.indexOf('msie') > negativeNum && u.indexOf('opera') === negativeNum) || u.indexOf('trident/7') > negativeNum,
    chrome: u.indexOf('chrome') > negativeNum && u.indexOf('edge') === negativeNum,
    ff: u.indexOf('firefox') > negativeNum,
    safari: u.indexOf('safari') > negativeNum && u.indexOf('chrome') === negativeNum,
    opera: u.indexOf('opera') > negativeNum
  };
})(window.navigator.userAgent.toLowerCase());
/******
	タブ関数
*******/
const _tabFunction = (root, parernt, child, activeClass) => {
  const tabTriggers = document.querySelectorAll(parernt);
  const tabTargets = document.querySelectorAll(child);

  for (let i = 0; i < tabTriggers.length; i++) {
    tabTriggers[i].addEventListener('click', e => {
      const currentMenu = e.currentTarget;
      const currentContent = tabTargets[i];

      for (let i = 0; i < tabTriggers.length; i++) {
        tabTriggers[i].classList.remove(activeClass);
      }
      currentMenu.classList.add(activeClass);

      for (let i = 0; i < tabTargets.length; i++) {
        tabTargets[i].classList.remove(activeClass);
      }
      if (currentContent !== null) {
        currentContent.classList.add(activeClass);
      }
    });
  }
};

/******
	ブレイクポイント判別
*******/
const TBNum = 1024;
const spNum = 767;
const _breakP = (w => {
  return {
    PC: w > TBNum,
    TB: w < TBNum && w > spNum,
    SP: w <= spNum
  };
})(window.innerWidth);

/******
	ログ出力
*******/
// eslint-disable-next-line consistent-return
const _log = (_key, _value, _color) => {
  if (location.href.indexOf('localhost') > 0) {
    // eslint-disable-next-line no-console
    console.log(
      `%c${_key}%c${_value}`,
      `margin-right: 10px; padding: 3px 5px; background: ${_color}; color: #fff;`,
      '',
      '',
      ''
    );
  } else {
    return null;
  }
};

// eslint-disable-next-line no-undef
export { _ua, _browser, _breakP, _tabFunction, _log };
