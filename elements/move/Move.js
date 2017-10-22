const html = require('tram-one').html()

const moveStyle = `
  border-radius: 10px;
  background: #575;
  padding: 5px;
  margin: 5px;
`
const moveNameStyle = `
  color: white;
  font-weight: bolder;
  background: #363;
  border-radius: 5px 5px 0px 0px;
  padding: 0px 5px;
`
const moveInputStyle = `
`
const moveNotesStyle = `
`
const typeNotesStyle = `
`

module.exports = (attrs) => {
  const {moveName, moveInput, moveNotes, typeColor, typeNotes} = attrs
  console.log(attrs)
  return html`
    <div style=${moveStyle} ${attrs}>
      <div style=${moveNameStyle}>
        ${moveName}
        <span style=${typeNotesStyle}> ${typeNotes} </span>
      </div>
      <div style=${moveInputStyle}> ${moveInput} </div>
      <div style=${moveNotesStyle}> ${moveNotes} </div>
    </div>
  `
}
