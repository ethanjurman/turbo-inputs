const html = require('tram-one').html()

const expandColor = (color) => {
  if (color.length == 4 && color.match(/(\#[\da-f]{3})/i)) {
    return color.slice(1).split('').reduce((endColor, color) => endColor += `${color}${color}`,'#')
  }
  return color
}

const shrinkColor = (color) => {
  if (color.match(/(\#[\da-f]{6})/i)) {
    return color.split('').reduce((endColor, color, index) => {
      return endColor += index % 2 ? color : ''
    },'#')
  }
  return color
}

const darkenColor = (color) => {
  if (color.match(/(\#[\da-f]*)/i)){
    return color.slice(1).split('').reduce((endColor, color) => {
      const modColor = color == '0' ? '1' : color
      return endColor += (parseInt(modColor, 16) - 1).toString(16)
    }, '#')
  }
  return color
}

const isBright = (color) => {
  const modColor = expandColor(color)
  const [red, green, blue] = modColor.match(/[^#]{2}/g)
  if (red && green && blue) {
    const value = (
      (parseInt(red, 16) * 299) + (parseInt(green, 16) * 587) +
      (parseInt(blue, 16) * 114)
    ) / 10000
    console.log(value, red, green, blue)
    return value > 20
  }
  return false
}

const getStyles = (attrs) => {
  const {typeColor = '#4caf50'} = attrs
  return {
    moveStyle: `
      border-radius: 10px;
      background: ${typeColor};
      padding: 5px;
      margin: 5px;
    `,
    moveNameStyle: `
      color: ${isBright(typeColor) ? 'black' : 'white' };
      font-weight: bolder;
      background: ${darkenColor(typeColor)};
      border-radius: 5px 5px 0px 0px;
      padding: 0px 5px;
    `,
    moveInputStyle: ``,
    moveNotesStyle: ``,
    typeNotesStyle: ``,
  }
}

module.exports = (attrs) => {
  const {moveName, moveInput, moveNotes, typeColor, typeNotes} = attrs
  const {moveStyle, moveNameStyle, moveInputStyle, moveNotesStyle, typeNotesStyle} = getStyles(attrs)
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
