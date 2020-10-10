const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let newArray = []
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array[i].length; j++){
      newArray.push(array[i][j])
    }
  }
  let catsArray = newArray.filter(element => element === '^^')
  return catsArray.length
};
