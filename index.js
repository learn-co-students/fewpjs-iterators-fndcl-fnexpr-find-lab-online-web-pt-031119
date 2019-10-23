const testVar = {}

function testFunc() {
  return "hi"
}


let superbowlWin = (data) => {
   let result = data.find(record => record.result === "W")
   return !!result ? result.year : undefined
}