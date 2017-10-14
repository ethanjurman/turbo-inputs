const html = require('tram-one').html()
const inputMap = require('./inputMap');

module.exports = ({name}) => {
  const inputObject = inputMap[name]
  return html`
    <img ${inputObject} />
  `
}
