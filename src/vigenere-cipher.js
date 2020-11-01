const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isNotReverse){
    this.isNotReverse = isNotReverse
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined ){
      throw new Error
    }

    // toUpperCase()
    message = message.toUpperCase()
    key = key.toUpperCase()

    // set alphabet
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   
    let encryption = ''
    let key_id = 0
    for (let i=0;  i< message.length; i++){
      if (alphabet.includes(message[i])){
        let encrypted_id = (alphabet.indexOf(message[i])+ alphabet.indexOf(key[key_id++ % key.length])) % alphabet.length
        encryption += alphabet[encrypted_id]
      }
      else{
        encryption += message[i]
      }
    }  

    if (this.isNotReverse === false){
      return encryption.split('').reverse().join('') 
    } else {
      return encryption
    }
  }  

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined ){
      throw new Error
    }
 // set alphabet
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   key = key.toUpperCase()
    let decryption = ''
    let key_id = 0
    for (let i=0;  i< encryptedMessage.length; i++){
      if (alphabet.includes(encryptedMessage[i])){
        let decrypted_id = (alphabet.indexOf(encryptedMessage[i])- alphabet.indexOf(key[key_id++ % key.length]) + 26) % alphabet.length
        decryption += alphabet[decrypted_id]
      }
      else{
        decryption += encryptedMessage[i]
      }
    }  
    if (this.isNotReverse === false){
      return decryption.split('').reverse().join('') 
    } else {
      return decryption
    }

  }  
}

module.exports = VigenereCipheringMachine;
