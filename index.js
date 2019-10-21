let testVar

function testFunc() {
  return "hi"
}

function superbowlWin(games){
  testVar = games.find(game=>
    game.result === 'W'
  );
  return !!testVar ? testVar.year : undefined 
}