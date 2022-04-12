var BowlingGame = function () {
  this.rolls = [];
};
BowlingGame.prototype.roll = function (pins) {
  this.rolls.push(pins);
};

BowlingGame.prototype.score = function () {
  var score = 0;
  var rollIndex = 0;
  var thisGame = this;

  function allPinsInFrame() {
    return thisGame.rolls[rollIndex] + thisGame.rolls[rollIndex + 1];
  }
  function isStrike() {
    return thisGame.rolls[rollIndex] === 10;
  }
  function isSpare() {
    return thisGame.rolls[rollIndex] + thisGame.rolls[rollIndex + 1] === 10;
  }
  function spareBonus() {
    return thisGame.rolls[rollIndex + 2];
  }
  function strikeBonus() {
    return thisGame.rolls[rollIndex + 1] + thisGame.rolls[rollIndex + 2];
  }
  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isStrike()) {
      score += 10 + strikeBonus();
      rollIndex++;
    } else if (isSpare()) {
      score += 10 + spareBonus();
      rollIndex += 2;
    } else {
      score += allPinsInFrame();
      rollIndex += 2;
    }
  }
  return score;
};
module.exports = {
  BowlingGame,
};
