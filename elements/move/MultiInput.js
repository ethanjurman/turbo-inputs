const html = require('tram-one').html({
  Input: require('./Input')
})
const Input = require('./Input')

const wrappedSpaceStyle = (spacing, inputLen) => {
  let makeSpace = '';
  if (spacing > 0) {
    makeSpace = `margin-right:${(spacing - 1) * (inputLen - 1)}em;`
  } else {
    const absSpacing = spacing < 0 ? -spacing : spacing
    makeSpace = `margin-right:${(-(inputLen - 1))}em;`
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
    return logic[input]({})(logic)
  }
  return Input(null, [logic[input]({})])
}

const MultiInput = ({spacing, i0, i1, i2}, children) => (logic) => {
  const space = spacing == '' ? 0.5 : spacing
  const inputs = [i0, i1, i2].map((input, index) => {
    if (input) {
      return html`
        <div style=${spacedElementStyle(space, index)}>
          ${evaluateInput(logic, input)}
        </div>
      `
    }
    return null
  }).filter((element) => element != null)
  return html`
    <div style=${wrappedSpaceStyle(space, inputs.length)}>
      ${inputs}
    </div>
  `
}

MultiInput.args = ["spacing", "i0", "i1", "i2"]

module.exports = MultiInput
