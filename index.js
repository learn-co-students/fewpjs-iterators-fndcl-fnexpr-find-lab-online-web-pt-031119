const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (record) => {
  const winYear = record.find(object => object.result === 'W')
  if (winYear) {
    return winYear.year
  } else {
    return undefined 
  }
}

// const superbowlWin = (record) => {
//   const winYear = record.find(function(object) {
//     return object.result === 'W'
//   })
//   if (winYear) {
//     return winYear.year
//   } else {
//     return undefined 
//   }
// }
