const {evaluateFile} = require('../fightText/reader')

module.exports = {
  init: () => {
    return {errors: []}
  },
  evaluateFile: (state, text, actions) => {
    new Promise( (resolve, reject) => {
      const evaluation = evaluateFile(text)
      actions.updateReader(evaluation)
      resolve(true)
    })
    return state
  },
  updateReader: (state, evaluation) => {
    return evaluation
  }
}
