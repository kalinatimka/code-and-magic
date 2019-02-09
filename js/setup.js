var setupWizard = document.querySelector('.setup-wizard');
var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardCoatInput = document.querySelector('input[name="coat-color"]');
var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardEyesInput = document.querySelector('input[name="eyes-color"]');
var setupFireball = document.querySelector('.setup-fireball-wrap');
var fireballInput = setupFireball.querySelector('input[name="fireball-color"]');

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
var dataPlayerWizard = {
  COATS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green'],
  FIREBALL_COLORS: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
};

var coatCounter = 0;
var eyeCounter = 0;
var fireballCounter = 0;

setupWizardCoat.addEventListener('click', function () {
  coatCounter = changeCounter(coatCounter, dataPlayerWizard.COATS);
  setupWizardCoat.style.fill = dataPlayerWizard.COATS[coatCounter];
  wizardCoatInput.value = dataPlayerWizard.COATS[coatCounter];
});

setupWizardEyes.addEventListener('click', function () {
  eyeCounter = changeCounter(eyeCounter, dataPlayerWizard.EYES_COLORS);
  setupWizardEyes.style.fill = dataPlayerWizard.EYES_COLORS[eyeCounter];
  wizardEyesInput.value = dataPlayerWizard.EYES_COLORS[eyeCounter];
});

setupFireball.addEventListener('click', function () {
  fireballCounter = changeCounter(fireballCounter, dataPlayerWizard.FIREBALL_COLORS);
  setupFireball.style.backgroundColor = dataPlayerWizard.FIREBALL_COLORS[fireballCounter];
  fireballInput.value = dataPlayerWizard.FIREBALL_COLORS[fireballCounter];
});

var changeCounter = function (counter, mas) {
  if (counter === (mas.length - 1)) {
    counter = 0;
  } else {
    counter++;
  }
  return counter;
}

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