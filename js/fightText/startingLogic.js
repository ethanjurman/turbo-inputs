const htmlLoader = require('tram-one').html

const MultiInput = require('../../elements/move/MultiInput')
const Move = require('../../elements/move/Move')
const Tag = require('../../elements/move/Tag')
const NormalText = require('../../elements/move/NormalText')
const Next = require('../../elements/move/inputs/Next')
const Arrow = require('../../elements/move/inputs/Arrow')
const Motion = require('../../elements/move/inputs/Motion')
const Air = require('../../elements/move/inputs/Air')
const QC = require('../../elements/move/inputs/QC')
const HC = require('../../elements/move/inputs/HC')
const FC = require('../../elements/move/inputs/FC')
const DP = require('../../elements/move/inputs/DP')
const Punch = require('../../elements/move/inputs/Punch')
const Kick = require('../../elements/move/inputs/Kick')
const LeftParen = require('../../elements/move/inputs/LeftParen')
const RightParen = require('../../elements/move/inputs/RightParen')
const CustomText = require('../../elements/move/inputs/CustomText')
const CustomButton = require('../../elements/move/inputs/CustomButton')

module.exports = {
  'mi': MultiInput,
  'air': Air,
  'text': NormalText,
  '>': Next,
  '236': QC,
  '214': QC.bind(null, {'flip':true}),
  '623': DP,
  '421': DP.bind(null, {'flip':true}),
  '41236': HC,
  '63214': HC.bind(null, {'flip':true}),
  '63214789': FC,
  '41236987': FC.bind(null, {'flip':true}),
  '6': Arrow,
  '3': Arrow.bind(null, {rotation: 45}),
  '2': Arrow.bind(null, {rotation: 90}),
  '1': Arrow.bind(null, {rotation: 135}),
  '4': Arrow.bind(null, {rotation: 180}),
  '7': Arrow.bind(null, {rotation: 225}),
  '8': Arrow.bind(null, {rotation: 270}),
  '9': Arrow.bind(null, {rotation: 315}),
  '5': Motion,
  'p': Punch,
  'k': Kick,
  'cb': CustomButton,
  'ct': CustomText,
  '(': LeftParen,
  ')': RightParen,
  'tag': Tag,
  'move': (typeParams) => (params, evaluateInputs, evaluateNotes, followUp) => htmlLoader({
    Move: require('../../elements/move/Move')
  })`
    <Move
      moveColor=${typeParams[1]}
      moveName="${params[1]}"
      moveInput=${evaluateInputs(params[2])}
      moveNotes=${evaluateNotes(params[4] || '')}
      moveTags=${evaluateInputs(params[3] || '')}
      followUp=${followUp}

    />
  `,
  'command': (params, evaluateInputs, evaluateNotes, followUp) => htmlLoader({
    Move: require('../../elements/move/Move')
  })`
    <Move
      moveColor='#aaa'
      moveName="${params[1]}"
      moveInput=${evaluateInputs(params[2])}
      moveNotes=${evaluateNotes(params[4] || '')}
      moveTags=${evaluateInputs(params[3] || '')}
      followUp=${followUp}
    />
  `,
  'special': (params, evaluateInputs, evaluateNotes, followUp) => htmlLoader({
    Move: require('../../elements/move/Move')
  })`
    <Move
      moveName="${params[1]}"
      moveInput=${evaluateInputs(params[2])}
      moveNotes=${evaluateNotes(params[4] || '')}
      moveTags=${evaluateInputs(params[3] || '')}
      followUp=${followUp}
    />
  `,
  'super': (params, evaluateInputs, evaluateNotes, followUp) => htmlLoader({
    Move: require('../../elements/move/Move')
  })`
    <Move
      moveColor='#d44336'
      moveName="${params[1]}"
      moveInput=${evaluateInputs(params[2])}
      moveNotes=${evaluateNotes(params[4] || '')}
      moveTags=${evaluateInputs(params[3] || '')}
      followUp=${followUp}
    />
  `,
}
