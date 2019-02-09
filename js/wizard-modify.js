(function () {
  var setupWizard = document.querySelector('.setup-wizard');
  var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardCoatInput = document.querySelector('input[name="coat-color"]');
  var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardEyesInput = document.querySelector('input[name="eyes-color"]');
  var setupFireball = document.querySelector('.setup-fireball-wrap');
  var fireballInput = setupFireball.querySelector('input[name="fireball-color"]');
  var coatCounter = 0;
  var eyeCounter = 0;
  var fireballCounter = 0;
  var dataPlayerWizard = {
    COATS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL_COLORS: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };

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
})();