const {evaluateFile} = require('../fightText/reader')

module.exports = {
  init: () => {return {}},
  toggleSideBar: (state, type) => {
    return Object.assign({}, state, {[type]: !state[type]})
  }
}
