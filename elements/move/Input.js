const html = require('tram-one').html()
const inputMap = require('./inputMap');

module.exports = ({name}) => {
  const inputObject = inputMap[name]
  fetch(inputObject.src).then(
    (response) => {
      return response.text()
    }
  ).then(
    (text) => {
      console.log(text)
      return text
    }
  )
  return html`
    <img ${inputObject} />
  `
}
