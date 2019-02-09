var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 150;
var CLOUD_Y = 10;
var GAP = 10;
var COLUMN_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};
// var renderText = function() {};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000000';
  ctx.fillText('Ура, Вы победили!', CLOUD_X + GAP * 13, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 12, CLOUD_Y + (GAP * 3));

  var maxTime = getMaxElement(times);
  console.log(maxTime);

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + (Math.random() * (1 - 0.2) + 0.2) + ')';
    }
    ctx.fillRect((CLOUD_X + (GAP * 5.5)) + ((COLUMN_WIDTH + COLUMN_GAP)* i), (CLOUD_Y + (GAP * 5)) + COLUMN_HEIGHT, COLUMN_WIDTH, -(Math.round((COLUMN_HEIGHT * times[i]) / maxTime)));
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], (CLOUD_X + (GAP * 5.5)) + ((COLUMN_WIDTH + COLUMN_GAP)* i), ((CLOUD_Y + (GAP * 5)) + COLUMN_HEIGHT) + GAP);
    console.log(names[i], times[i]);
  }
};
