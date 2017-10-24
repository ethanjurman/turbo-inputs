const html = require('tram-one').html()

const style = `
  font-size: 20px;
  transform: translateX(5px) translateY(-16px);
  display: inline-block;
  font-weight: bold;
`

module.exports = ({text}) => html`
  <span style=${style}> ${text} </span>
`
