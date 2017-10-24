const html = require('tram-one').html()

const {evaluateFile} = require('../js/fightText/reader')

const Joiner = (attrs, children) => html`<div> ${children} </div>`

module.exports = () => {
  const output = evaluateFile(`
    special:Hadouken:236.p
    special:Hadouken:236.k
  `)
  console.log(output)
  return Joiner(null, output)
}
