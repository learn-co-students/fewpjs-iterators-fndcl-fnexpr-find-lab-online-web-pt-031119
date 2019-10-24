const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arg) {
	let result = arg.find(game => game.result === "W")
	if (result) {
		return result.year
	} else {
		return undefined
	}
}	


// This is another way to write the same function (with block notation)
// function superbowlWin(arg) {
// 	let outcome = arg.find(function(game) {
// 		return game.result === "W"
// 		})
// 	return outcome.year
// }