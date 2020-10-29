const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {}
  let turns = 2 ** disksNumber - 1
  let seconds = Math.floor(turns * 3600 /turnsSpeed)
  
  result.turns = turns
  result.seconds = seconds

  return result
};
