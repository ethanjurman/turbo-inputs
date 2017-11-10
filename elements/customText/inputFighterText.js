const html = require('tram-one').html()

const inputStyle = `
  position: fixed;
  width: calc(50% - 3em);
  height: calc(100% - 3em - 50px);
  font-family: monospace;
  margin-left: 1em;
  white-space: nowrap;
  overflow: auto;
  resize: none;
`

module.exports = ({text, updateText}, children) => {
  const updateTextElement = ({target:{value}}) => {
    updateText(value)
  }
  return html`
    <div>
      <textarea
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
        id="inputTextArea"
        style=${inputStyle}
        oninput=${updateTextElement}
        >${text}</textarea>
    </div>
  `
}
