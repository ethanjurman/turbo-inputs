module.exports = {
  init: () => localStorage.customText || require('./startingInput'),
  updateText: (text, newText, actions) => {
    actions.evaluateFile(newText)
    localStorage.customText = newText
    return newText
  }
}
