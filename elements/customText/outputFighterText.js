const html = require('tram-one').html({
  CharacterButton: require('../CharacterButton')
})
const Joiner = (attrs, children) => html`<div> ${children} </div>`

outputStyle = `
  padding-bottom: 50px;
`

module.exports = ({text, evaluationHtml = []}) => {
  const moveList = Joiner(null, evaluationHtml || [])
  return html`
    <div style=${outputStyle}>
      ${moveList}
    </div>
  `
}
