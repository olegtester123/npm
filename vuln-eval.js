// SAST: eval with user-controlled input
function runUserCode(userInput) {
  return eval(userInput);
}

function runWithFunction(userInput) {
  return new Function(userInput)();
}

module.exports = { runUserCode, runWithFunction };
