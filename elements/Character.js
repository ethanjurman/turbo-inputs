const html = require('tram-one').html()

const nameStyle = `
  font-weight: bolder;
  padding: 20px 10px 0px 10px;
  font-size: 1.5em;
`
const notesStyle = `
  display: inline-block;
`

const renderCharacterNotes = (characterNotes) => {
  if (!characterNotes) { return null; }
  return html`<div style=${notesStyle}> ${characterNotes} </div>`
}

module.exports = ({characterName, characterNotes}) => html`
  <div>
    <div id=${characterName} style=${nameStyle}> ${characterName} </div>
    ${renderCharacterNotes(characterNotes)}
  </div>
`
