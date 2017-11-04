const html = require('tram-one').html({
  CharacterButton: require('../elements/CharacterButton'),
  SideBar: require('../elements/SideBar'),
})
const {evaluateFile} = require('../js/fightText/reader')

const Joiner = (attrs, children) => html`<div> ${children} </div>`

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
  return html`
    <div>
      <SideBar>
        ${characters.map((character) => {
          return html`<CharacterButton> ${character} </CharacterButton>`
        })}
      </SideBar>
      ${moveList}
    </div>
  `
}
