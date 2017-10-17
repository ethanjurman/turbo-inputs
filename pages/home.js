const Tram = require('tram-one')

const inputsLocation = '../elements/move/inputs'

const html = Tram.html({
  header: require('../elements/header'),
  Input: require('../elements/move/input'),
  Air: require('../elements/move/inputs/Air'),
  CustomButton: require('../elements/move/inputs/CustomButton'),
  Arrow: require('../elements/move/inputs/Arrow'),
  CustomText: require('../elements/move/inputs/CustomText'),
  DP: require('../elements/move/inputs/DP'),
  FC: require('../elements/move/inputs/FC'),
  HC: require('../elements/move/inputs/HC'),
  Kick: require('../elements/move/inputs/Kick'),
  Kick2x: require('../elements/move/inputs/Kick2x'),
  Kick3x: require('../elements/move/inputs/Kick3x'),
  KickStrength: require('../elements/move/inputs/KickStrength'),
})

module.exports = () => {
  return html`
    <div>
    <img src="./svgs/fc.svg" />
    <img src="./svgs/hc.svg" />
      <div>
        <Air />
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
        <CustomText text="HP" />
        <CustomText text="TAP" />
        <CustomText text="KICK" y=-10 />
        <CustomText text="HOLD" y=10 />
        <CustomText text="BLOCK" />
        <CustomText text="COMBO" />
      </div>
      <div>
        <DP />
        <FC />
        <HC />
        <DP flip />
        <FC flip />
        <HC flip />
        <FC flip rotation='45'/>
        <HC rotation='45' />
      </div>
      <div>
        <Kick />
        <Kick2x />
        <Kick3x />
        <KickStrength strength='LK'/>
        <KickStrength strength='MK'/>
        <KickStrength strength='HK'/>
        <KickStrength text="LK" color=${["#fff", "#46d5d3"]}/>
        <KickStrength text='MK' color=${["#fff", "#49a5ff"]}/>
        <KickStrength text='HK' color=${["#fff", "#0200f1"]}/>
        <KickStrength text="HOLD" color=${"#ccc"}/>
      </div>
    </div>
  `
}
