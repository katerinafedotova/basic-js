const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  if (!Array.isArray(array) && !array.length) 
   throw Error
  
  let newArray = array.slice(0)
  for (let i=0; i < newArray.length; i++){
    if (newArray[i] === '--discard-next'){
      newArray[i] = undefined
      newArray[i+1] = undefined
      i += 1
    }
    else if (newArray[i] === '--discard-prev'){
      newArray[i] = undefined
      newArray[i-1] = undefined
    }
    else if (newArray[i] === '--double-prev'){
      newArray[i] = newArray[i-1]
    }
    else if (newArray[i] === '--double-next'){
      newArray[i] = newArray[i+1]
    }
  }
  return newArray.filter(item => item !== undefined)
};
