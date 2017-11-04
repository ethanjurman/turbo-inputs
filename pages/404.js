const Tram = require('tram-one')
const html = Tram.html()

module.exports = () => {
  return html`
    <div>
      <h1>404?</h1>
      <code>No route ${window.location.pathname}</code><br>
      Check <code>turbo-inputs/main.js</code> to see all the available routes.
    </div>
  `
}
