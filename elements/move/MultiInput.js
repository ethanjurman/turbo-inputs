const html = require('tram-one').html({
  Input: require('./Input')
})
const Input = require('./Input')

const wrappedSpaceStyle = (spacing, inputLen) => {
  let makeSpace = '';
  if (spacing < 1) {
    const absSpacing = spacing < 0 ? -spacing : spacing
    makeSpace = `margin-right:${-absSpacing * (inputLen - 1)}em;`
  }
  return `
    display: inline-block;
    position: relative;
    ${makeSpace}
  `
}

const spacedElementStyle = (spacing, index) => `
  display: inline-block;
  position: relative;
  left: ${(spacing - 1) * index}em;
`

const evaluateInput = (logic, input) => {
  if (logic[input].name.match(/NormalText/)) {
    return logic[input]({})
  }
  if (logic[input].name.match(/Tag/)) {
    return logic[input]({})
  }
  if (logic[input].name.match(/MultiInput/)) {
    return logic[input]({logic})
  }
  return Input(null, [logic[input]({})])
}

const MultiInput = (attrs, {logic}) => {
  const {spacing, i0, i1, i2} = attrs
  const inputs = [i0, i1, i2].map((input, index) => {
    if (input) {
      return html`
        <div style=${spacedElementStyle(spacing, index)}>
          ${evaluateInput(logic, input)}
        </div>
      `
    }
    return null
  }).filter((element) => element != null)
  return html`
    <div style=${wrappedSpaceStyle(spacing, inputs.length)}>
      ${inputs}
    </div>
  `
}

MultiInput.args = ["spacing", "i0", "i1", "i2"]

module.exports = MultiInput
