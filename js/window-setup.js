(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var setupWindow = document.querySelector('.setup');
  var setupForm = setupWindow.querySelector('.setup-wizard-form');
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
    useEscExit(true);
  };

  // функция закрытия окна настройки персонажа
  var closeSetup = function () {
    setupWindow.classList.add('hidden');
    useEscExit(false);
  };

  var successHandler = function (response) {
    setupWindow.classList.add('hidden');
  }

  window.errorHandler = function (response) {
    alert('Произошла ошибка ' + response + '!');
  }

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

  setupForm.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(setupForm), successHandler, errorHandler);
    evt.preventDefault();
  });
})();
