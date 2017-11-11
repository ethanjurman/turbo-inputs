module.exports = {
  init: () => {return {}},
  loadGameSearchList: (gamesList, games) => {
    return games
  },
  updateGameSearch: (gamesList, {games, text=""}) => {
    const reg = new RegExp(".*" + text.split("").join(".*") + ".*", "i")
    return Object.keys(games).reduce((gamesObject, gameTitle) => {
      if (gameTitle.match(reg)) {
        gamesObject[gameTitle] = games[gameTitle]
        return gamesObject
      }
      return gamesObject
    }, {})
  }
}
