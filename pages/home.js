const Tram = require('tram-one')
const html = Tram.html({
  header: require('../elements/header'),
  Input: require('../elements/move/input'),
  Air: require('../elements/move/inputs/Air'),
  CustomButton: require('../elements/move/inputs/CustomButton'),
  Arrow: require('../elements/move/inputs/Arrow'),
  CustomText: require('../elements/move/inputs/CustomText'),
  DP: require('../elements/move/inputs/DP'),
})

module.exports = () => {
  return html`
    <div>
      <header></header>
      <div>
        <Air ></Air>
        <CustomButton text="A" />
        <CustomButton text="B" colors=${['#f00','#f00']} />
        <CustomButton text="Y" colors=${['#777','#777']} />
        <CustomButton text="X" colors=${['#777','#777']} />
        <CustomButton text="Z" colors=${'#909'} />
      </div>
      <div>
        <Arrow />
        <Arrow rotation='45'/>
        <Arrow rotation='90'/>
        <Arrow rotation='135'/>
        <Arrow rotation='180'/>
        <Arrow rotation='225'/>
        <Arrow rotation='260'/>
        <Arrow rotation='315'/>
      </div>
      <div>
        <CustomText text="TAP" />
        <CustomText text="KICK" />
        <CustomText text="BLOCK" />
        <CustomText text="WOMBO" />
        <CustomText text="COMBO" />
      </div>
      <div>
        <DP />
      </div>
    </div>
  `
}
