const Tram = require('tram-one')

const inputsLocation = '../elements/move/inputs'

const html = Tram.html()

module.exports = () => {
  return html`
    <div>
      <h1> TURBO INPUTS </h1>
      <p> The place to find all your inputs </p>
      <a href='./testPage'> Click here for a test page </a>
    </div>
  `
}
