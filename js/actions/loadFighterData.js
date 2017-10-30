const firebase = require('./firebase')

module.exports = {
  init: () => { return {data: '', loadState: 'not_started'}}
  loadGame: ({data, loadState}, actions) => {
    return {
      data: firebase.database(),
      loadState: 'done'
    }
  }
}
