module.exports = {
  init: () => { return {data: '', loadState: 'not_started'}},
  updateFighterData: (_, {game, data}) => {
    localStorage[game] = data
    return {
      data: data,
      loadState: 'done'
    }
  },
  loadGame: ({data, loadState}, game, actions) => {
    if (localStorage[game]) {
      console.log('loaded cached game data')
      return {
        data: localStorage[game],
        loadState: 'done'
      }
    }
    firebase.database().ref().child(game).on('value',
      (data) => {
        actions.updateFighterData({game, data: data.val()})
      }
    )
    return {
      data: data,
      loadState: 'pending'
    }
  }
}
