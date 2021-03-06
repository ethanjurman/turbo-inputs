const html = require('tram-one').html()

const inputStyle = `
  position: fixed;
  width: calc(50% - 3em);
  max-width: calc(400px - 3em);
  height: calc(100% - 3em - 100px);
  font-family: monospace;
  white-space: nowrap;
  overflow: auto;
  resize: none;
`

module.exports = ({text, updateText, isLoaded}, children) => {
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
