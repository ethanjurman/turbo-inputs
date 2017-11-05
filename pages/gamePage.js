const html = require('tram-one').html({
  CharacterButton: require('../elements/CharacterButton'),
  SideBar: require('../elements/SideBar'),
})
const {evaluateFile} = require('../js/fightText/reader')

const Joiner = (attrs, children) => html`<div> ${children} </div>`

const commandlistLinkStyle = `
  text-align: right;
`

module.exports = (store, actions, params) => {
  switch (store.fighterData.loadState) {
    case 'not_started':
      actions.loadGame(params.gameId)
      return null
    case 'pending':
      return null
    case 'done':
      break
    default:
      return null
  }
  const output = evaluateFile(store.fighterData.data)
  const moveList = Joiner(null, output.html)
  const characters = Object.keys(output.characters)
  const toggleCharacterSideBar = actions.toggleSideBar.bind(null, 'character')
  const toggleCodeSideBar = actions.toggleSideBar.bind(null, 'code')
  return html`
    <div>
      <SideBar show=${store.sideBar.character} onClick=${toggleCharacterSideBar}>
        ${characters.map((character) => {
          return html`<CharacterButton onClick=${toggleCharacterSideBar} characterName=${character} />`
        })}
      </SideBar>
      <SideBar show=${store.sideBar.code} onClick=${toggleCodeSideBar} width="400" icon="fa-eye">
        <div style=${commandlistLinkStyle}>
          <a href="/customTextPage"> Build a Command List </a>
        </div>
        <pre class="CodeSection"> ${store.fighterData.data.trim()}</pre>
      </SideBar>
      ${moveList}
    </div>
  `
}
