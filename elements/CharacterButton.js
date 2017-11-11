const html = require('tram-one').html({
  PopButton: require('./PopButton')
})

const buttonStyle = `
  width: 100%;
  max-width: calc(100% - 33px);
`

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
  <PopButton style=${buttonStyle} onclick=${goToCharacter.bind(null, attrs)}>
    ${attrs.characterName}
  </PopButton>
`
