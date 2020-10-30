const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
    
  getLength() {
    return this.chain.length
  },

  addLink(value) {
    if (this === undefined) {
      this.chain.push('()') 
    }
    else{
      this.chain.push(`( ${value} )`)
    }
    return this
  },

  removeLink(position){
    if (isNaN(position) || position !== Math.abs(position)){
      this.chain = []
      throw new Error
    }
    else {
    this.chain.splice(position - 1, 1)
    return this
    }
  },

  reverseChain(){
    this.chain.reverse()
    return this

  },

  finishChain(){
    let newChain = this.chain
    this.chain = []
    return newChain.join('~~')
  }
};

module.exports = chainMaker;
