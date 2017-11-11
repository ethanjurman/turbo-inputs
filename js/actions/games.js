module.exports = {
  init: () => {
    if (localStorage.games) {
      return JSON.parse(localStorage.games)
    }
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
    localStorage.games = JSON.stringify(gameList)
    return gameList
  }
}
