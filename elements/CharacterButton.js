const html = require('tram-one').html()

const buttonStyle = `
  display: inline-block;
  background: white;
  font-weight: bold;
  min-width: calc(100% - 23px);
  border-radius: 15px;
  padding: 3px 3px;
  cursor: pointer;
  user-select: none;
  text-align: center;
`
const notesStyle = ``

const goToCharacter = ({onClick, characterName}) => {
  const characterDOM = document.getElementById(characterName)
  if (characterDOM) {
    characterDOM.scrollIntoView()
  }
  if (onClick) {
    onClick(characterName)
  }
}

module.exports = (attrs) => html`
  <div class="PopButton" onclick=${goToCharacter.bind(null, attrs)} style=${buttonStyle}>
    ${attrs.characterName}
  </div>
`
