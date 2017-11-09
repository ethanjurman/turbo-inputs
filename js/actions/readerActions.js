const {evaluateFile} = require('../fightText/reader')

let evaluateTime

module.exports = {
  init: () => {
    return {errors: []}
  },
  evaluateFile: (state, text, actions) => {
    start = (new Date).getTime()
    clearTimeout(evaluateTime)
    evaluateTime = setTimeout(() => {
      const evaluation = evaluateFile(text)
      actions.updateReader(evaluation)
      console.log("LOAD ", (new Date).getTime() - start)
    }, 150)
    console.log("SKIP ", (new Date).getTime() - start)
    return state
  },
  updateReader: (state, evaluation) => {
    return evaluation
  }
}
