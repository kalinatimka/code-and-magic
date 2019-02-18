(function () {
  var setupSimilarList = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  /*var dataWizards = {
    COUNT: 4,
    NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    COATS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green']
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
  };*/

  // функция присвоения данных элементам разметки
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  // функия добавления схожих магов в разметку
  var renderWizards = function (wizards) {
    // var wizards = generateWizards();
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    setupSimilarList.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.backend.load(renderWizards, errorHandler);
  // renderWizards();
})();
