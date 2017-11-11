module.exports = {
  init: () => {
    return {}
  },
  loadGames: (games, _, actions) => {
    fetch(`/games`)
      .then((data) => data.json())
      .then((data) => {
        actions.updateGamesList(data)
      })
    return games
  },
  updateGamesList: (games, gameList) => {
    return gameList
  }
}
