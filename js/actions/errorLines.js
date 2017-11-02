const {evaluateFile} = require('../fightText/reader')

module.exports = {
  init: () => [],
  // updateErrorLine: (state, errorLine) => errorLine,
  updateTestText: (errorLines, newText) => {
    return evaluateFile(newText).errors
  },
}
