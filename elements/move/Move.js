const html = require('tram-one').html()

const NOTE_REG = /(.+)(\#[0-9a-f]{3,6})/i

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
    return value > 20
  }
  return false
}

const getStyles = (moveColor = '#4caf50') => {
  return {
    moveStyle: `
      color: ${isBright(moveColor) ? 'black' : 'white' };
      border-radius: 10px;
      background: ${moveColor};
      padding: 5px;
      margin: 5px;
    `,
    moveNameStyle: `
      font-weight: bolder;
      background: ${darkenColor(darkenColor(moveColor))};
      border-radius: 10px 10px 0px 0px;
      padding: 0px 5px;
    `,
    moveInputStyle: `
      line-height: 0px;
    `,
    moveNotesStyle: `
      padding: 0px 5px;
    `,
    moveTagsStyle: (color) => `
      color: ${isBright(color) ? 'black' : 'white' };
      border: 2px ${color} solid;
      border-radius: 5px;
      padding: 0px 2px;
      background: ${darkenColor(color)};
      float: right;
      margin: 4px;
    `,
  }
}

const renderNotes = (moveTags, moveTagsStyle) => {
  const notes = typeof moveTags === 'string' ? moveTags.trim().split('|').reverse() : moveTags
  return notes.map(note => {
    const [str, noteText = note, noteColor = '#66c'] = note.match(NOTE_REG) || []
    return html`<span style=${moveTagsStyle(noteColor)}> ${noteText} </span>`
  })
}

const Move = (attrs) => {
  const {moveName, moveInput, moveNotes, moveColor, moveTags} = attrs
  const {moveStyle, moveNameStyle, moveInputStyle, moveNotesStyle, moveTagsStyle} = getStyles(moveColor)
  return html`
    <div style=${moveStyle} ${attrs}>
      <div style=${moveNameStyle}>
        ${moveName}
        ${moveTags ? renderNotes(moveTags, moveTagsStyle) : ''}
      </div>
      <div style=${moveInputStyle}> ${moveInput} </div>
      <div style=${moveNotesStyle}> ${moveNotes} </div>
    </div>
  `
}

Move.args = ['moveColor']

module.exports = Move
