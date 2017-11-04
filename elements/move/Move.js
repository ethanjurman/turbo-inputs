const html = require('tram-one').html()
const FollowUp = require('./FollowUp')

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

const getStyles = (moveColor = '#4caf50', moveNotes) => {
  return {
    moveStyle: `
      color: ${isBright(moveColor) ? 'black' : 'white' };
      border-radius: 10px;
      background: ${moveColor};
      margin: 0px 2px 0px 2px;
    `,
    moveNameStyle: `
      font-weight: bolder;
      background: ${(darkenColor(moveColor))};
      border-radius: 10px 10px 0px 0px;
      padding: 2px 6px 0px 6px;
    `,
    moveInputStyle: `
      line-height: 0px;
      font-size: 48px;
      padding: 0px 5px 0px 5px;
    `,
    moveNotesStyle: `
      padding: 0px 5px;
      font-size: 16px;
    `,
    moveTagsStyle: (color) => `
      color: ${isBright(color) ? 'black' : 'white' };
      border: 2px ${color} solid;
      border-radius: 5px;
      padding: 0px 2px;
      background: ${darkenColor(color)};
      float: right;
      margin: 0px 4px;
      font-size: 0.8em;
    `,
  }
}

const renderTags = (moveTags, moveTagsStyle) => {
  const notes = typeof moveTags === 'string' ? moveTags.trim().split('|').reverse() : moveTags.reverse()
  return notes.map(note => {
    const [str, noteText = note, noteColor = '#66c'] = note.match(NOTE_REG) || []
    return html`<span style=${moveTagsStyle(noteColor)}> ${noteText} </span>`
  })
}

const Move = (attrs) => {
  const {moveName, moveInput, moveNotes, moveColor, moveTags, followUp} = attrs
  const {moveStyle, moveNameStyle, moveInputStyle, moveNotesStyle, moveTagsStyle} = getStyles(moveColor, moveNotes)
  const moveHTML = html`
    <div style=${moveStyle} ${attrs}>
      <div style=${moveNameStyle}>
        ${moveTags ? renderTags(moveTags, moveTagsStyle) : ''}
        ${moveName}
      </div>
      <div style=${moveInputStyle}> ${moveInput} </div>
      <div style=${moveNotesStyle}> ${moveNotes} </div>
    </div>
  `
  if (followUp > 0) {
    return FollowUp({followUpCount: followUp}, moveHTML)
  }
  return moveHTML
}

Move.args = ['moveColor']

module.exports = Move
