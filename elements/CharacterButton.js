const html = require('tram-one').html()

const nameStyle = `
  display: inline-block;
  padding: 3px 3px;
  border-radius: 15px;
  border: 4px #333 solid;
  background: black;
  color: white;
  margin: 4px;
  cursor: pointer;
  user-select: none;
`
const notesStyle = ``

module.exports = (attrs, children) => html`
  <div onclick=${attrs.onClick} style=${nameStyle}>
    ${children}
  </div>
`
