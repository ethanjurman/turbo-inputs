const html = require('tram-one').html()

const buttonStyle = (style) => `
  display: inline-block;
  background: white;
  font-weight: bold;
  border-radius: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 3px;
  cursor: pointer;
  user-select: none;
  text-align: center;
  ${style}
`

module.exports = ({style='', onClick}, children) => html`
  <div class="PopButton" onclick=${onClick} style=${buttonStyle(style)}>
    ${children}
  </div>
`
