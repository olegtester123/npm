// SAST: ReDoS - vulnerable regex that can hang on crafted input
function validateEmail(input) {
  const re = /^([a-zA-Z0-9])(([\-.]|[_]+)?([a-zA-Z0-9]+))*(@){1}[a-z0-9]+[.]{1}(([a-z]{2,3})|([a-z]{2,3}[.]{1}[a-z]{2,3}))$/;
  return re.test(input);
}

function matchLogLine(line) {
  const re = /^(a+)+$/;
  return re.test(line);
}

module.exports = { validateEmail, matchLogLine };
