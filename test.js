const { BowlingGame } = require("./bowlingGame.js");
describe("BowlingGame", function () {
  var game;

  beforeEach(function () {
    game = new BowlingGame();
  });

  function rollMany(rolls, pins) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  }

  function rollSpare() {
    game.roll(5);
    game.roll(5);
  }

  function rollStrike() {
    game.roll(10);
  }

  it("should return 0 for game with all 0", function () {
    rollMany(20, 0);
    expect(game.score()).toBe(0);
  });

  it("should return for game of all ones", function () {
    rollMany(20, 1);
    expect(game.score()).toBe(20);
  });

  it("should handle one spare", function () {
    rollSpare();
    game.roll(3);
    rollMany(17, 0);
    expect(game.score()).toBe(16);
  });

  it("should handle one strike", function () {
    rollStrike();
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);
    expect(game.score()).toBe(24);
  });

  it("should return a score when all strikes", function () {
    rollMany(12, 10);
    expect(game.score()).toBe(300);
  });
  it("should return score for 10 pairs of 9 and miss", () => {
    rollMany(10, 9);
    rollMany(10, 0);
    expect(game.score()).toBe(90);
  });
  it("should return 10 pairs of 5 and spare", function () {
    for (i = 0; i <= 10; i++) {
      rollSpare();
    }

    expect(game.score()).toBe(150);
  });
});
