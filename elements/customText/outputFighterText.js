const html = require('tram-one').html({
  CharacterButton: require('../CharacterButton')
})
const {evaluateFile} = require('../../js/fightText/reader')
const Joiner = (attrs, children) => html`<div> ${children} </div>`

module.exports = ({text, updateErrorLine, errorLine}) => {
  const output = evaluateFile(`${text}`)
  if (output.error && errorLine != output.error) {
    updateErrorLine(output.error)
  }
  if (typeof output.error == 'undefined' && errorLine != 'null' ) {
    updateErrorLine('null')
  }
  const moveList = Joiner(null, output.html || [])
  return html`
    <div>
      ${moveList}
    </div>
  `
}
