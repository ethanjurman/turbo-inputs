const html = require('tram-one').html()

const inputStyle = `
  position: fixed;
  width: calc(50% - 3em);
  height: calc(100% - 3em);
  font-family: monospace;
  margin-left: 1em;
`

const arrowStyle = `
  position: absolute;
  color: red;
`

const updateText = (updateFunc) => ({target:{value}}) => {
  updateFunc(value)
}

module.exports = ({text, updateTestText, errorLine}, children) => {
  let errorArrowStyle = `display: none;`
  if (errorLine !== "null") {
    errorArrowStyle = `${arrowStyle} margin-top: ${errorLine}em;`;
  }

  return html`
    <div>
      <div style=${errorArrowStyle}>${`>`}</div>
      <textarea onkeyup=${updateText(updateTestText)} style=${inputStyle}>${text}</textarea>
    </div>
  `
}
