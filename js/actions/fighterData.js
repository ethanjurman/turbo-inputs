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
    fetch(`/gameId/?gameId=${game}`)
      .then((data) => data.text())
      .then((data) => {
        actions.updateFighterData({game, data})
      }
    )
    return {
      data: data,
      loadState: 'pending'
    }
  }
}
