const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(statsArray) {
  let result = statsArray.find(stat => stat.result === "W");
  return !!result ? result.year : undefined;
}
