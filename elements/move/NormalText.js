const html = require('tram-one').html()

const style = `
  line-height: 48px;
  font-size: 20px;
  transform: translateX(5px);
  display: inline-block;
  font-weight: bold;
  padding-right: 10px;
  padding-top: 5px;
  vertical-align: top;
`

const NormalText = ({text}) => html`
  <div style=${style}> ${text} </div>
`

NormalText.args = ['text']

module.exports = NormalText
