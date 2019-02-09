(function () {
  var setupWindow = document.querySelector('.setup');
  var setupWindowOpen = document.querySelector('.setup-open');
  var setupWindowClose = document.querySelector('.setup-close');
  var setupWindowUsername = setupWindow.querySelector('.setup-user-name');

  // функция-событие на закрытие окна по клавише ESC
  var onSetupWindowEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closeSetup();
    }
  }

  // функция добавления/удаления события для закрытия окна на ESC
  var useEscExit = function (flag) {
    if (flag) {
      document.addEventListener('keydown', onSetupWindowEscPress);
    } else {
      document.removeEventListener('keydown', onSetupWindowEscPress);
    }
  };

  // функция открытия окна настройки персонажа
  var openSetup = function () {
    setupWindow.classList.remove('hidden');
    document.querySelector('.setup-similar').classList.remove('hidden');
    useEscExit(true);
  };
  
  // функция закрытия окна настройки персонажа
  var closeSetup = function () {
    setupWindow.classList.add('hidden');
    useEscExit(false);
  };

  setupWindowUsername.addEventListener('focus', function () {
    useEscExit(false);
  });
  
  setupWindowUsername.addEventListener('blur', function () {
    useEscExit(true);
  });
  
  setupWindowClose.addEventListener('click', function () {
    closeSetup();
  });
  
  setupWindowClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closeSetup();
    }
  });
  setupWindowOpen.addEventListener('click', function () {
    openSetup();
  });

  setupWindowOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openSetup();
    }
  });
})();