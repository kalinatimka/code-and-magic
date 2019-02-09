var setupWindow = document.querySelector('.setup');
var setupWindowOpen = document.querySelector('.setup-open')
var setupWindowClose = document.querySelector('.setup-close');
var setupWindowUsername = setupWindow.querySelector('.setup-user-name');
var setupWizard = document.querySelector('.setup-wizard');
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setupSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var dataWizards = {
  COUNT: 4,
  NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  COATS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green']
};

setupWindowOpen.addEventListener('click', function () {
  openSetup();
});

setupWindowOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openSetup();
  }
});

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

// функция событие на закрытие окна по клавише ESC
var onSetupWindowEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeSetup();
  }
}

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

// функция добавления/удаления события для закрытия окна на ESC
var useEscExit = function (flag) {
  if (flag) {
    document.addEventListener('keydown', onSetupWindowEscPress);
  } else {
    document.removeEventListener('keydown', onSetupWindowEscPress);
  }
};

// функция рандомного объединения имени и фамилии волшебника
var generateNames = function () {
  return wizardFullName = dataWizards.NAMES[Math.floor(Math.random()*dataWizards.NAMES.length)] + ' ' + dataWizards.SURNAMES[Math.floor(Math.random()*dataWizards.SURNAMES.length)];
};

// функия нахождения рандомного элемента
var generateRandomElement = function (mas) {
  return mas[Math.floor(Math.random()*mas.length)];
};

// функия-генератор магов
var generateWizards = function () {
  var wizards = [];
  for (var i = 0; i < dataWizards.COUNT; i++) {
    wizards[i] = {
      name: generateNames(),
      coatColor: generateRandomElement(dataWizards.COATS),
      eyesColor: generateRandomElement(dataWizards.EYES_COLORS)
    };
  }
  return wizards;
};

// функция присвоения данных элементам разметки 
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

// функия добавления схожих магов в разметку
var renderWizards = function () {
  var wizards = generateWizards();
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  setupSimilarList.appendChild(fragment);
};

renderWizards();
console.dir(setupWindowOpen);