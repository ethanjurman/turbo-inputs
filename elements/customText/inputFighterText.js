const html = require('tram-one').html()

const inputStyle = `
  width: 100%;
  font-family: monospace;
`

module.exports = ({text, updateTestText}, children) => {
  return html`
    <div>
      <textarea rows=20 onkeyup=${updateTestText} style=${inputStyle}>${text}</textarea>
    </div>
  `
}
