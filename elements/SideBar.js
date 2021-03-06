const htmlLoader = require('tram-one').html

const panelStyle = ({show = 'false', width = '200', color = 'white', style = ''}) => `
  border-right: 15px white solid;
  background: ${color};
  position: fixed;
  max-width: ${width}px;
  width: 100%;
  height: 100%;
  left: ${show == 'true' ? '0px' : `-${+width + 15}px`};
  top: 0;
  z-index: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  ${style}
`

const panelButtonStyle = ({show = 'false'}) => `
  padding: 4px;
  cursor: pointer;
`

const overlayStyle = ({show = 'false'}) => `
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: ${show == 'true' ? '0%' : '100%'};
  background: ${show == 'true' ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.0)'};
  z-index: 0;
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
    <div class="SideBarOverlay" onclick=${attrs.onClick} style=${overlayStyle(attrs)}></div>
    <span onclick=${attrs.onClick} style=${panelButtonStyle(attrs)}>
      <i class="fa ${attrs.icon || "fa-bars"}" aria-hidden="true"></i>
    </span>
  </div>
`
