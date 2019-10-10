const testVar = {}

function testFunc() {
  return "hi"
}



function superbowlWin(record) {
  const win = record.find(x => x.result === "W")
    if(win) {
      return win.year
    } else {
      return undefined
    }
};
