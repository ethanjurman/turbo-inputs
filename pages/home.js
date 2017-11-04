const Tram = require('tram-one')

const html = Tram.html()

module.exports = () => {
  return html`
    <div>
      <h1> TURBO INPUTS </h1>
      <p> The place to find all your inputs </p>
      <a href='./testPage'> Click here for a random svg page </a>
      <a href='./customTextPage'> Click here try out the syntax page </a>
      <a href='./readerTestPage'> Click here for an example page </a>
    </div>
  `
}
