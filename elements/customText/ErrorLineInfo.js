const html = require('tram-one').html({
  HideButton: require('../HideButton')
})

const errorContainerStyle = (lines, hide) => `
  display: ${lines.length == 0 ? 'none' : 'inherit'};
  position: fixed;
  bottom: ${hide == 'true' ? `-5em` : `0px`};
  left: 0px;
  width: 100%;
  background: white;
  z-index: 1;
`

const errorWrapperStyle = `
  overflow-y: scroll;
  height: 5em;
  color: red;
`
const errorLineStyle = `
  padding-left: 5px;
  font-family: monospace;
`

module.exports = ({errorLines, hide, onClick}, children) => {
  return html`
    <div className="SideBar" style=${errorContainerStyle(errorLines, hide)}>
      <HideButton onClick=${onClick} arrow=${hide == 'true' ? 'up' : 'down'}/>
      <div style="text-align: center; font-size: 0.8em;"> The errors below are unresolved. </div>
      <div style=${errorWrapperStyle}>
        ${errorLines.map((error) => {
          return html`<div style=${errorLineStyle}>
            ${error[0]}
            <i style="padding-left: 4px;" class="fa fa-arrow-right" aria-hidden="true"></i>
            ${error[1]}
          </div>`
        })}
      </div>
    </div>
  `
}
