const Tram = require('tram-one')
const html = Tram.html({
  PopButton: require('../elements/PopButton'),
  PopInput: require('../elements/PopInput'),
})

let fetchedGames = false;
let loadedSearchSelection = false;

const centerStyle = `
  text-align: center;
`

const headerStyle = `
  font-family: 'Permanent Marker', cursive;
`

const inputStyle = `
`

const renderGames = (games={}) => {
  return Object.keys(games).map((gameTitle) => {
    return html`
      <PopButton href=${'/game/' + games[gameTitle]}>
        ${gameTitle}
      </PopButton>
    `
  })
}

const onInput = (store, actions) => {
  return (text) => {
    actions.updateGameSearch({text, games: store.games})
  }
}

module.exports = (store, actions) => {
  if (fetchedGames == false && Object.keys(store.games).length == 0) {
    fetchedGames = true;
    actions.loadGames()
  }
  if (loadedSearchSelection == false && Object.keys(store.games).length != 0) {
    loadedSearchSelection = true;
    actions.loadGameSearchList(store.games)
    // bug where gameSearchObject is empty?
    setTimeout(()=>actions.updateGameSearch({games: store.games, text: ""}),0)
  }
  return html`
    <div style=${centerStyle}>
      <h1 style=${headerStyle}> TURBO INPUTS </h1>
      <p><b> The place to find all your inputs </b></p>
      <PopButton href='https://github.com/ethanjurman/turbo-inputs'>
        GitHub
      </PopButton>
      <PopButton href='/customTextPage'>
        Build a Command List
      </PopButton>
      <h2 style=${headerStyle}> GAME SEARCH </h2>
      <PopInput style=${inputStyle}
        defaultText="Search Game"
        onInput=${onInput(store, actions)}
        text=${store.gameSearchText}
      />
      <div>
        ${renderGames(store.gameSearchObject)}
      </div>
    </div>
  `
}
