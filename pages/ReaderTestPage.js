const html = require('tram-one').html()

const {evaluateFile} = require('../js/fightText/reader')

const Joiner = (attrs, children) => html`<div> ${children} </div>`

module.exports = () => {
  const output = evaluateFile(`
    xism -> tag:X-ISM:#a44
    zism -> tag:Z-ISM:#4a4
    vism -> tag:V-ISM:#44a
    p_hold -> p:#000:#7d9fbd:HOLD:1.3:135:0
    hp -> p:#ff5722:#fff:HP
    to_charge -> text:to charge
    command -> move:#bbb
    level3Super -> move:#d00

    level3Super:Neo Deadly Rave:p.p.p:xism.zism:Hold [4.p.p] for more damage
    command:Throw:6.hp:xism.zism
    special:Hadouken:236.p:xism.zism.vism
    special:Shoryuken:623.p
    special:Tatsumaki Senpukyaku / Air:(.air.).214.k
    special:Joudan Sokutou Geri:41236.k
    super:Super Art I - Shinkuu-Hadouken:236.236.p
    super:Super Art II - Shin Shoryuken:236.236.p
    super:Super Art III - Denjin Hadouken:236.236.p.(.p_hold.to_charge.)
  `)
  return Joiner(null, output)
}
