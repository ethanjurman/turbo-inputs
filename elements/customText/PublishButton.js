const html = require('tram-one').html()

const buttonStyle = `
  display: inline-block;
  background: white;
  font-weight: bold;
  border-radius: 15px;
  padding: 3px 15px;
  cursor: pointer;
  user-select: none;
  text-align: center;
  position: fixed;
  bottom: 50px;
  left: calc(50% - 100px)
`

module.exports = ({onClick}) => html`
  <div class="PopButton" onclick=${onClick} style=${buttonStyle}>
    Publish
  </div>
`
