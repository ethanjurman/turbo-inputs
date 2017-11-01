const html = require('tram-one').html

const wrappingStyle = `
  margin: 5px;
`

const leftStyle = `
  display: inline-block;
  margin: 5px;
  width:calc(50% - 10px);
`
const rightStyle = `
  display: inline-block;
  margin: 5px;
  float:right;
  width:calc(50% - 10px);
`

const updateText = (updateFunction) => (evt) => {
  updateFunction(evt.target.value)
}

module.exports = (store, actions) => {
  return html({
    InputFighterText: require('../elements/customText/inputFighterText'),
    OutputFighterText: require('../elements/customText/outputFighterText')
  })`
    <div style=${wrappingStyle}>
      <div style=${leftStyle}>
        <InputFighterText
          text=${store.testFighterText}
          errorLine=${store.errorLine}
          updateTestText=${actions.updateTestText}
        />
      </div>
      <div style=${rightStyle}>
        <OutputFighterText
          text=${store.testFighterText}
          errorLine=${store.errorLine}
          updateErrorLine=${actions.updateErrorLine}
        />
      </div>
    </div>
  `
}
