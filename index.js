const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(statsArray) {
  let result = statsArray.find(s => s.result === "W");
  return !!result ? result.year : undefined;
}
