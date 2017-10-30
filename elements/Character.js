const html = require('tram-one').html()

const nameStyle = `
  font-weight: bolder;
  padding: 0px 10px;
  font-size: 1.5em;
`
const notesStyle = ``

module.exports = ({characterName, characterNotes}) => html`
  <div>
    <div style=${nameStyle}> ${characterName} </div>
    <div style=${notesStyle}> ${characterNotes} </div>
  </div>
`
