module.exports = {
  init: () => { return {data: '', loadState: 'not_started'}},
  updateFighterData: (_, {game, data}) => {
    return {
      data: data,
      loadState: 'done'
    }
  },
  loadGame: ({data, loadState}, game, actions) => {
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
