const html = require('tram-one').html({
  CharacterButton: require('../CharacterButton')
})
const Joiner = (attrs, children) => html`<div> ${children} </div>`

module.exports = ({text, evaluateHtml, evaluationHtml = []}) => {
  const moveList = Joiner(null, evaluationHtml || [])
  return html`
    <div>
      ${moveList}
    </div>
  `
}
