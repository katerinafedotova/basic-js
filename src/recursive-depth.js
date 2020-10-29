const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1
    let depth = 1
    arr.map (element => {
      if (Array.isArray(element)){
        count = 1 + this.calculateDepth(element)
      }
      if (count > depth){
        depth = count
      }
    })
    return depth
  }
};