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
  QC: require('../elements/move/inputs/QC'),
  Kick: require('../elements/move/inputs/Kick'),
  Kick: require('../elements/move/inputs/Kick'),
  Punch: require('../elements/move/inputs/Punch'),
  Next: require('../elements/move/inputs/Next'),
})

module.exports = () => {
  return html`
    <div>
      <div>
        <Input>
          <Air />
          <CustomButton text="A" />
          <Next />
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
        <g>
          <Arrow rotation='90'/>
          <CustomText text="HOLD" y='0' x='00' font='1' stroke='2' />
        </g>
        <g>
          <Arrow rotation='180'/>
          <CustomText text="HOLD" y='180' x='00' font='1' stroke='2' />
        </g>
      </Input>
      </div>
      <div>
        <Input>
          <CustomText text="HP" />
          <CustomText text="TAP" blur />
          <CustomText text="KICK" />
          <CustomText text="HOLD" />
          <CustomText text="HOLD" blur />
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
          <QC />
          <QC rotation='90'/>
        </Input>
      </div>
      <div>
        <Input>
          <g>
            <Kick />
            <CustomText text="LK" y='180' x='-100' font='1.5' />
          </g>
          <Kick text='LK'/>
          <Kick text="LK" color='#46d5d3'/>
          <Kick text='MK' color='#49a5ff'/>
          <Kick text='HK' color='#5075f1'/>
          <Kick color='#000' fill='#7d9fbd'/>
        </Input>
      </div>
      <div>
        <Input>
          <Punch />
          <Punch text='LP'/>
          <Punch color='#000' fill='#fddeac'/>
          <g>
            <Punch color='#000' fill='#7d9fbd'/>
            <CustomText text="HOLD" y='180' x='00' font='1' stroke='2' />
          </g>
        </Input>
      </div>
    </div>
  `
}
