const {evaluateFile} = require('../fightText/reader')

let evaluateTime

module.exports = {
  init: () => {
    return {errors: []}
  },
  evaluateFile: (state, text, actions) => {
    clearTimeout(evaluateTime)
    evaluateTime = setTimeout(() => {
      const evaluation = evaluateFile(text)
      actions.updateReader(evaluation)
    }, 150)
    return state
  },
  updateReader: (state, evaluation) => {
    return evaluation
  }
}
