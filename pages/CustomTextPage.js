const html = require('tram-one').html

const wrappingStyle = `
  margin: 5px;
`

const leftStyle = `
  display: inline-block;
  margin: 5px;
  width:calc(50% - 10px);
  max-width: 390px;
`
const rightStyle = `
  display: inline-block;
  margin: 5px;
  float:right;
  width:calc(50% - 10px);
`

let loaded = false

module.exports = (store, actions) => {
  if (!loaded && store.reader.characters == undefined) {
    actions.updateText(store.customFighterText)
    loaded = true
  }
  const toggleErrorInfo = actions.toggleSideBar.bind(null, 'error')
  return html({
    InputFighterText: require('../elements/customText/InputFighterText'),
    OutputFighterText: require('../elements/customText/OutputFighterText'),
    ErrorLineInfo: require('../elements/customText/ErrorLineInfo'),
    PublishButton: require('../elements/customText/PublishButton')
  })`
    <div style=${wrappingStyle}>
      <div style=${leftStyle}>
        <ErrorLineInfo
          hide=${store.sideBar.error}
          onClick=${toggleErrorInfo}
          errorLines=${store.reader.errors}
        />
        <InputFighterText
          text=${store.customFighterText}
          updateText=${actions.updateText}
          isLoaded=${store.reader.status == 'done'}
        />
        <PublishButton onClick=${actions.publish}/>
      </div>
      <div style=${rightStyle}>
        <OutputFighterText
          text=${store.customFighterText}
          evaluationHtml=${store.reader.html}
        />
      </div>
    </div>
  `
}
