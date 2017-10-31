const html = require('tram-one').html({
  CharacterButton: require('../CharacterButton')
})
const {evaluateFile} = require('../../js/fightText/reader')
const Joiner = (attrs, children) => html`<div> ${children} </div>`

module.exports = ({text}) => {
  const output = evaluateFile(`${text}`)
  const moveList = Joiner(null, output.html)
  const characters = Object.keys(output.characters)
  return html`
    <div>
      ${moveList}
    </div>
  `
}
