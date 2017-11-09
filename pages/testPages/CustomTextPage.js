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

module.exports = (store, actions) => {
  return html({
    InputFighterText: require('../../elements/customText/InputFighterText'),
    OutputFighterText: require('../../elements/customText/OutputFighterText'),
    ErrorLinesMarker: require('../../elements/customText/ErrorLinesMarker'),
  })`
    <div style=${wrappingStyle}>
      <div style=${leftStyle}>
        <ErrorLinesMarker errorLines=${store.reader.errors} />
        <InputFighterText
          text=${store.testFighterText}
          updateText=${actions.updateText}
        />
      </div>
      <div style=${rightStyle}>
        <OutputFighterText
          text=${store.testFighterText}
          evaluateHtml=${actions.evaluateFile}
          evaluationHtml=${store.reader.html}
        />
      </div>
    </div>
  `
}
