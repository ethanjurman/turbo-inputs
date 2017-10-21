const Tram = require('tram-one')

const inputsLocation = '../elements/move/inputs'

const html = Tram.html({
  header: require('../elements/header'),
  Input: require('../elements/move/input'),
  Air: require('../elements/move/inputs/Air'),
  CustomButton: require('../elements/move/inputs/CustomButton'),
  Arrow: require('../elements/move/inputs/Arrow'),
  CustomText: require('../elements/move/inputs/CustomText'),
  DP: require('../elements/move/inputs/DP'),
  FC: require('../elements/move/inputs/FC'),
  HC: require('../elements/move/inputs/HC'),
  QC: require('../elements/move/inputs/QC'),
  Kick: require('../elements/move/inputs/Kick'),
  Kick: require('../elements/move/inputs/Kick'),
  Punch: require('../elements/move/inputs/Punch'),
  Next: require('../elements/move/inputs/Next'),
})

module.exports = () => {
  return html`
    <div>
      <h1> TURBO INPUTS </h1>
      <p> The place to find all your inputs </p>
      <a href='./testPage'> Click here for a test page </a>
    </div>
  `
}
