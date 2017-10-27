const Tram = require('tram-one')

const inputsLocation = '../elements/move/inputs'

const html = Tram.html({
  header: require('../elements/header'),
  Input: require('../elements/move/Input'),
  Motion: require('../elements/move/inputs/Motion'),
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
  Move: require('../elements/move/Move'),
  NormalText: require('../elements/move/NormalText'),
})

module.exports = () => {
  return html`
    <div>
      <Move
        moveName="Hadouken"
        moveInput=${html`<Input> <QC /> <Punch /> </Input>`}
      />

      <Move
        moveName="Shoryuken"
        moveInput=${html`<Input> <DP /> <Punch /> </Input>`}
      />

      <Move
        moveName="Tatsumaki Senpukyaku / Air"
        moveInput=${html`
          <Input>
            <LeftParen /> <Air /> <RightParen /> <QC flip /> <Kick />
          </Input>
        `}
      />

      <Move
        moveName="Joudan Sokutou Geri"
        moveInput=${html`<Input> <HC /> <Kick /> </Input>`}
      />

      <Move
        moveName="Super Art I : Shinkuu-Hadouken"
        moveInput=${html`<Input> <QC /> <QC /> <Punch /> </Input>`}
      />

      <Move
        typeColor='#d44336'
        moveName="Super Art II : Shin Shoryuken"
        moveInput=${html`<Input> <QC /> <QC /> <Punch /> </Input>`}
      />

      <Move
        typeColor='#d44336'
        moveName="Super Art III : Denjin Hadouken"
        moveInput=${html`<span> <Input> <QC /> <QC /> <Punch />
          <LeftParen />
            <g>
              <Punch fg='#7d9fbd'/>
              <CustomText text="HOLD" y='100' />
            </g>
        </Input>
        <NormalText text="to Charge" />
        <Input> <RightParen /> </Input> </span>`}
      />
    </div>
  `
}
