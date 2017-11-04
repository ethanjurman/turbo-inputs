const html = require('tram-one').html()

const panelStyle = `
`

module.exports = (attrs, children) => html`
  <div style=${panelStyle}>
    ${children}
  </div>
`
