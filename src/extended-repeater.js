const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str !== 'string'){
    if (str === null){
      str = 'null'
    } else {
      str = str.toString()
    }
  }

  let addition = options.addition,
    repeatTimes = options.repeatTimes,
    separator = options.separator,
    additionSeparator = options.additionSeparator,
    additionRepeatTimes = options.additionRepeatTimes

  if (addition !== undefined){
    if (typeof addition !== 'string'){
      if ( addition === null){
        addition = 'null'
      } else {
      addition = addition.toString()
      }
    }
  } 
  else {
    addition = ''
  }

  let newStr = ''
  
  if (additionSeparator === undefined && additionRepeatTimes === undefined){
    additionSeparator = ''
    newStr = addition + additionSeparator 
  } else if (additionSeparator === undefined && additionRepeatTimes !== undefined){
    additionSeparator = '+'
    newStr = addition + additionSeparator
  } else {
    newStr = addition + additionSeparator
  }

  
  if (additionRepeatTimes === undefined){
    newStr = newStr
  } else {
    newStr = newStr.repeat(additionRepeatTimes)
  }

  if (newStr.endsWith(additionSeparator)){
    newStr = newStr.substring(0, newStr.length-additionSeparator.length)
  }

  if (separator === undefined && repeatTimes === undefined){
    separator = ''
    newStr = str + newStr + separator
  } else if (separator === undefined && repeatTimes !== undefined) {
    separator ='+'
    newStr = str + newStr + separator
  } else {
    newStr = str + newStr + separator
  }

  if (repeatTimes === undefined){
    newStr = newStr
  } else {
    newStr = newStr.repeat(repeatTimes)
  }

  if (newStr.endsWith(separator)){
    newStr = newStr.substring(0, newStr.length-separator.length)
  }

return newStr

};
  