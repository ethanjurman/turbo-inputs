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

module.exports = ({text, updateText}, children) => {
  const updateTextElement = ({target:{value}}) => {
    updateText(value)
  }
  return html`
    <div>
      <textarea
        id="inputTextArea"
        style=${inputStyle}
        oninput=${updateTextElement}
        >${text}</textarea>
    </div>
  `
}
