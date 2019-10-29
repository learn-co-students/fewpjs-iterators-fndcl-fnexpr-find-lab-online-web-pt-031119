// const testVar = {}

// function testFunc() {(
//   return "hi"
// }

function superbowlWin(array){
  let variable = array.find(function(object) {
  return object['result'] === "W"
    // return object['year']
  })
  if (variable){
  return variable['year']
  } else {
    return undefined
  }
}