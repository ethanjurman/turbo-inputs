module.exports = {
  init: () => require('./startingInput'),
  updateText: (text, newText, actions) => {
    actions.evaluateFile(newText)
    return newText
  }
}
