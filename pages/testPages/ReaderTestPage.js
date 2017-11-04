const html = require('tram-one').html({
  CharacterButton: require('../../elements/CharacterButton')
})
const {evaluateFile} = require('../../js/fightText/reader')

const Joiner = (attrs, children) => html`<div> ${children} </div>`

module.exports = () => {
  const output = evaluateFile(`
p_hold -> p:#000:#7d9fbd:HOLD:1.3:135:0
hp -> p:#ff5722:#fff:HP
to_charge -> text:to charge

character:RYU
special:Hadouken:236.p
special:Shoryuken:623.p
special:Tatsumaki Senpukyaku / Air:(.air.).214.k
special:Joudan Sokutou Geri:41236.k
super:Super Art I - Shinkuu-Hadouken:236.236.p
super:Super Art II - Shin Shoryuken:236.236.p
super:Super Art III - Denjin Hadouken:236.236.p.(.p_hold.to_charge.)

character:KEN
special:Hadouken:236.p
special:Shoryuken:623.p
special:Tatsumaki Senpukyaku / Air:(.air.).214.k
super:Super Art I - Shoryureppa:236.236.p
super:Super Art II - Shinryuken:236.236.k::*Tap [k]
super:Super Art III - Shippu Jinraikyaku:236.236.k
  `)
  const moveList = Joiner(null, output.html)
  const characters = Object.keys(output.characters)
  return html`
    <div>
      ${characters.map((character) => {
        return html`<CharacterButton> ${character} </CharacterButton>`
      })}
      ${moveList}
    </div>
  `
}
