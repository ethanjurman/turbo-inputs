const Tram = require('tram-one')
const html = Tram.html({
  header: require('../elements/header'),
  Input: require('../elements/move/input')
})

module.exports = () => {
  return html`
    <div>
      <header></header>
      <div>
        Thank you for using Tram-One!<br>
        To get started, edit <code>turbo-inputs/pages/home.js</code>.
        <Input name="air"></Input>
        <Input name="cb"></Input>
        <Input name="ct"></Input>
      </div>
    </div>
  `
}
