const html = require('tram-one').html()

const inputStyle = `
  position: fixed;
  width: calc(50% - 3em);
  height: calc(100% - 3em);
  font-family: monospace;
  margin-left: 1em;
  white-space: nowrap;
  overflow: auto;
`

module.exports = ({text, updateTestText}, children) => {
  const updateText = ({target:{value}}) => {
    updateTestText(value)
  }

  return html`
    <div>
      <textarea onkeyup=${updateText} style=${inputStyle}>${text}</textarea>
    </div>
  `
}
