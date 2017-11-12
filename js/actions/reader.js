const {evaluateFile} = require('../fightText/reader')

let evaluateTime

module.exports = {
  init: () => {
    return {errors: [], promises: [], status: 'empty'}
  },
  evaluateFile: (state, text, actions) => {
    clearTimeout(evaluateTime)
    evaluateTime = setTimeout(() => {
      const evaluation = evaluateFile(text)
      actions.updateReader(evaluation)
    }, 150)
    state.status = 'evaluating'
    return state
  },
  updateReader: (state, evaluation) => {
    evaluation.status = 'done'
    evaluation.html = Object.keys(evaluation.characters).reduce((html, character) => {
      return html.concat(evaluation.characters[character])
    }, [])
    return evaluation
  },
  addPromise: (state, callback) => {
    state.promises = state.promises.concat(callback)
    return state
  }
}
