const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const outcome = array.find( ({result}) => result === "W" );
  if (outcome) {
    return outcome.year
  } else {
    return undefined
  }
}
