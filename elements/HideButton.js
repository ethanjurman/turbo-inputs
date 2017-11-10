const htmlLoader = require('tram-one').html

const hideButtonStyle = `
  text-align: center;
  cursor: pointer;
`

module.exports = ({onClick, arrow = 'left'}) => htmlLoader()`
  <div style="text-align: center;">
    <span class='hidePanelButton' onclick=${onClick} style=${hideButtonStyle}>
      <i class="fa fa-arrow-${arrow}" aria-hidden="true"></i>
    </span>
  </div>
`
