module.exports = {
  init: () => localStorage.customText || require('./startingInput'),
  updateText: (text, newText, actions) => {
    actions.evaluateFile(newText)
    localStorage.customText = newText
    return newText
  },
  publish: (text) => {
      fetch('/publish', {
      method: 'post',
      body: text
    })
    .then((data) => data.text())
    .then((gameId) => {
      window.location.href = `/game/${gameId}`
    })
    return text
  }
}
