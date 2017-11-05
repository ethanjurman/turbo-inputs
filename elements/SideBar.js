const htmlLoader = require('tram-one').html

const panelStyle = ({show = 'false', width = '200', color = 'white'}) => `
  // display: ${show == 'true' ? 'inherit' : 'none'};
  border-right: 15px white solid;
  background: ${color};
  position: fixed;
  width: ${width}px;
  height: 100%;
  left: ${show == 'true' ? '0px' : `-${+width + 15}px`};
  top: 0;
  z-index: 1;
`

const panelButtonStyle = ({show = 'false'}) => `
  padding: 4px;
  cursor: pointer;
`

const hideButtonStyle = `
  text-align: center;
  cursor: pointer;
`

const HideButton = ({onClick}) => htmlLoader()`
  <div style="text-align: center;">
    <span class='hidePanelButton' onclick=${onClick} style=${hideButtonStyle}>
      <i class="fa fa-arrow-left" aria-hidden="true"></i>
    </span>
  </div>
`

module.exports = (attrs, children) => htmlLoader({HideButton})`
  <div style="display: inline-block">
    <div class="SideBar" style=${panelStyle(attrs)}>
      <HideButton onClick=${attrs.onClick} />
      ${children}
    </div>
    <span onclick=${attrs.onClick} style=${panelButtonStyle(attrs)}>
      <i class="fa ${attrs.icon || "fa-bars"}" aria-hidden="true"></i>
    </span>
  </div>
`
