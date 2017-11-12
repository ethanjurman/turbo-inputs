const html = require('tram-one').html({
  CharacterButton: require('../elements/CharacterButton'),
  SideBar: require('../elements/SideBar'),
  PopButton: require('../elements/PopButton'),
})
const {evaluateFile} = require('../js/fightText/reader')

const Joiner = (attrs, children) => html`<div> ${children} </div>`

const commandlistLinkStyle = `
  text-align: right;
`

const topBarStyle = `
  background: white;
  padding: 3px;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 1;
`

module.exports = (store, actions, params) => {
  let output
  switch (store.fighterData.loadState) {
    case 'not_started':
      actions.loadGame(params.gameId)
      return null
    case 'pending':
      return null
    case 'done':
      if (store.reader.status == 'done') {
        output = store.reader
        break
      } else {
        if (store.reader.status == 'empty') {
          actions.evaluateFile(store.fighterData.data)
        }
        return null
      }
    default:
      return "Page could not be loaded"
  }
  const moveList = Joiner(null, output.html)
  const characters = Object.keys(output.characters)
  const toggleCharacterSideBar = actions.toggleSideBar.bind(null, 'character')
  const toggleCodeSideBar = actions.toggleSideBar.bind(null, 'code')
  return html`
    <div style="padding-top: 15px;">
      <div style=${topBarStyle}>
        <SideBar show=${store.sideBar.character} onClick=${toggleCharacterSideBar} style="text-align:center;">
          ${characters.map((character) => {
            return html`<CharacterButton onClick=${toggleCharacterSideBar} characterName=${character} />`
          })}
        </SideBar>
        <SideBar show=${store.sideBar.code} onClick=${toggleCodeSideBar} width="400" icon="fa-eye">
          <div style=${commandlistLinkStyle}>
            <PopButton href="/customTextPage">
              Build a Command List
            </PopButton>
          </div>
          <pre class="CodeSection"> ${store.fighterData.data.trim()}</pre>
        </SideBar>
      </div>
      ${moveList}
    </div>
  `
}
