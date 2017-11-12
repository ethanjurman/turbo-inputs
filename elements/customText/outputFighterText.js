const html = require('tram-one').html({
  CharacterButton: require('../CharacterButton')
})
const Joiner = (attrs, children) => html`<div> ${children} </div>`

const outputStyle = `
  padding-bottom: 50px;
`

module.exports = ({text, evaluationHtml = []}) => {
  return html`
    <div style=${outputStyle}>
      ${evaluationHtml}
    </div>
  `
}
