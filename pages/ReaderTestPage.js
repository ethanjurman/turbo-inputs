const html = require('tram-one').html()

const {evaluateFile} = require('../js/fightText/reader')

const Joiner = (attrs, children) => html`<div> ${children} </div>`

module.exports = () => {
  const output = evaluateFile(`
    p_hold -> p:#000:#7d9fbd:HOLD:1.3:135:0

    special:movement:5.6.3.2.1.4.7.8.9
    special:Hadouken:236.p
    special:Shoryuken:623.p
    special:Tatsumaki Senpukyaku / Air:(.air.).214.k
    special:Joudan Sokutou Geri:41236.k
    super:Super Art I - Shinkuu-Hadouken:236.236.p
    super:Super Art II - Shin Shoryuken:236.236.p
    super:Super Art III - Denjin Hadouken:236.236.p.(.p_hold.)
  `)
  return Joiner(null, output)
}
