module.exports = function check(str, bracketsConfig) {
  //let brackets = 	bracketsConfig.flat().join('')
  let brackets = "[]()"
  let stackArr = []

  for(let bracket of str) {
    let bracketsIndex = brackets.indexOf(bracket)

    if (bracketsIndex === -1){
      continue
    }

    if(bracketsIndex % 2 === 0) {
      stackArr.push(bracketsIndex + 1)
    } else {
      if(stackArr.pop() !== bracketsIndex) {
        return false;
      }
    }
  }
  return stackArr.length === 0
}
