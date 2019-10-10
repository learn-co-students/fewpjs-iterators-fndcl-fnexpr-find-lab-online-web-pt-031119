const testVar = {}

function testFunc() {
  return "hi"
}

//
// function superbowlWin(record) {
//   return record.find(x => x.result === "W").year
// };

// function superbowlWin(record) {
//   if (record.result != "N/A") {
//     return record.find(x => x.result === "W").year
//   } else {
//     return undefined
//   }
// }

function superbowlWin(record) {
  const win = record.find(x => x.result === "W")
    if(win) {
      return win.year
    } else {
      return undefined
    }
};


//
// const findTeam = (teamName) => {
//   const team = teams.find(team) => {
//       return team.name === teamName
//   }
//     if(team) {
//       do something
//     } else {
//       error
//     }
// };
