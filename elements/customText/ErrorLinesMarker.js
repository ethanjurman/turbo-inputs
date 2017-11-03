const html = require('tram-one').html()

const errorStyle = (index) => `
  position: absolute;
  color: red;
  top: ${index + 1}em;
`

module.exports = ({errorLines}, children) => {
  return html`
    <div>
      ${errorLines.map((line) => {
        return html`<div style=${errorStyle(line)}>${`>`}</div>`
      })}
    </div>
  `
}
