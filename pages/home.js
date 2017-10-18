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
    <img src="./svgs/qc.svg" />
    <img src="./svgs/dp.svg" />
      <div>
        <Input>
          <Air />
          <CustomButton text="A" />
          <CustomButton text="B" color='#f00' />
          <CustomButton text="Y" color='#777' />
          <CustomButton text="X" color='#777' />
          <CustomButton text="Z" color='#909' />
        </Input>
      </div>
      <div>
      <Input>
        <g>
          <Arrow />
          <Arrow rotation='45'/>
          <Arrow rotation='90'/>
          <Arrow rotation='135'/>
          <Arrow rotation='180'/>
        </g>
        <Arrow rotation='225'/>
        <Arrow rotation='270'/>
        <Arrow rotation='315'/>
      </Input>
      </div>
      <div>
        <Input>
          <CustomText text="HP" />
          <CustomText text="TAP" />
          <CustomText text="KICK"/>
          <CustomText text="HOLD"/>
          <CustomText text="BLOCK" />
          <CustomText text="SUPER COMBO" />
        </Input>
      </div>
      <div>
        <Input>
          <DP />
          <FC />
          <HC />
          <DP flip />
          <FC flip />
          <HC flip />
          <FC flip rotation='45'/>
          <HC rotation='45' />
        </Input>
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
