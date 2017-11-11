const html = require('tram-one').html()

const inputWrapperStyle = (style) => `
  display: inline-block;
  background: white;
  font-weight: bold;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 3px;
  user-select: none;
  text-align: center;
  ${style}
`

const inputStyle = `
  width: calc(100% - 24px);
  overflow: hidden;
  border: 0px;
  font-size: 1em;
`

const onKeyUp = (inputFunction, defaultText) => {
  return ({target: {value}}) => {
    inputFunction(value)
  }
}

module.exports = ({style='', text="", defaultText="Search", icon="search", onInput}) => {
  return html`
    <div>
      <div
        class="PopInput"
        style=${inputWrapperStyle(style)}
      >
        <i class="fa fa-${icon}" aria-hidden="true"></i>
        <input
          onkeyup=${onKeyUp(onInput, defaultText)}
          style=${inputStyle}
          placeholder=${defaultText}
          value=${text}
        />
      </div>
    </div>
  `
}
