const Tram = require('tram-one')

const inputsLocation = '../elements/move/inputs'

const html = Tram.html({
  header: require('../elements/header'),
  Input: require('../elements/move/Input'),
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
  LeftParen: require('../elements/move/inputs/LeftParen'),
  RightParen: require('../elements/move/inputs/RightParen'),
})

module.exports = () => {
  return html`
    <div>
      <div>
        <Input>
          <QC /> <Punch />
        </Input>
      </div>

      <div>
        <Input>
          <DP /> <Punch />
        </Input>
      </div>

      <div>
        <Input>
          <LeftParen /> <Air /> <RightParen /> <QC flip /> <Kick />
        </Input>
      </div>

      <div>
        <Input>
          <HC /> <Kick />
        </Input>
      </div>

      <div>
        <Input>
        <QC /> <QC /> <Punch />
        <QC /> <QC /> <Punch />
        <QC /> <QC /> <Punch /> <LeftParen /> <RightParen />
        </Input>
      </div>


      <div>
        <Input>
          <Air />
          <CustomButton text="A" color='#2fa01e' />
          <Next />
          <CustomButton text="B" color='#e5340a' />
          <CustomButton text="Y" color='#f2c813' />
          <CustomButton text="X" color='#003cbe' />
          <CustomButton text="Z" color='#60c' />
          <CustomButton text="RZ" color='#66c' />
          <CustomButton text="LZ" color='#66c' />
          <CustomButton text="XYZ" color='#66c' />
          <CustomButton text="DASH" color='#66c' />
        </Input>
        <span style="float:right">
          <Input>
            <CustomButton text="A" color='#d84f4d' />
            <CustomButton text="B" color='#ca9c2c' />
            <CustomButton text="C" color='#00a266' />
            <CustomButton text="D" color='#006a9c' />
          </Input>
        </span>
      </div>
      <div>
      <Input>
        <Arrow />
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
            <Kick fg='#7d9fbd'/>
            <CustomText text="HOLD" y='100' x='00' font='1' stroke='2' />
          </g>
          <g>
            <Punch fg='#7d9fbd'/>
            <CustomText text="HOLD" y='100' x='00' font='1' stroke='2' />
          </g>
          <Kick />
          <Punch />
          <g width='900'>
            <Punch x='400' />
            <Punch x='200' />
            <Punch />
          </g>
          <Kick />
        </Input>
      </div>
      <div>
        <Input>
          <Punch text="LP" bg='#ffc107' fg='#fff'/>
          <Punch text='MP' bg='#ff9800' fg='#fff'/>
          <Punch text='HP' bg='#ff5722' fg='#fff'/>
          <Kick text="LK" bg='#90caf9' fg='#fff'/>
          <Kick text='MK' bg='#42a5f5' fg='#fff'/>
          <Kick text='HK' bg='#1565c0' fg='#fff'/>
        </Input>
      </div>
    </div>
  `
}
