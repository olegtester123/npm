// SAST: XSS - unsanitized user input in HTML / innerHTML
function renderUserComment(userInput) {
  return '<div class="comment">' + userInput + '</div>';
}

function setContent(element, userHtml) {
  element.innerHTML = userHtml;
}

function documentWrite(userInput) {
  document.write(userInput);
}

module.exports = { renderUserComment, setContent, documentWrite };
