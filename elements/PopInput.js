const html = require('tram-one').html()

const inputStyle = (style) => `
  display: inline-block;
  background: white;
  font-weight: bold;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 3px;
  cursor: pointer;
  user-select: none;
  text-align: center;
  ${style}
`

const onKeyUp = (inputFunction, defaultText) => {
  return ({target: {innerText}}) => {
    if (innerText == defaultText) {
      return null;
    } else {
      inputFunction(innerText)
    }
  }
}

module.exports = ({style='', defaultText="Search", onInput}) => html`
  <div
    class="PopInput"
    contenteditable="true"
    onkeyup=${onKeyUp(onInput, defaultText)}
    style=${inputStyle(style)}
  >
    ${defaultText}
  </div>
`
