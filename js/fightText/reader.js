const htmlLoader = require('tram-one').html

const Input = require('../../elements/move/Input')
const Arrow = require('../../elements/move/inputs/Arrow')
const Motion = require('../../elements/move/inputs/Motion')
const Air = require('../../elements/move/inputs/Air')
const QC = require('../../elements/move/inputs/QC')
const HC = require('../../elements/move/inputs/HC')
const DP = require('../../elements/move/inputs/DP')
const Punch = require('../../elements/move/inputs/Punch')
const Kick = require('../../elements/move/inputs/Kick')
const LeftParen = require('../../elements/move/inputs/LeftParen')
const RightParen = require('../../elements/move/inputs/RightParen')
const NormalText = require('../../elements/move/NormalText')
const CustomText = require('../../elements/move/inputs/CustomText')
const CustomButton = require('../../elements/move/inputs/CustomButton')

const {
  input,
  type,
  text,
} = require('./componentTypes')

const evaluateInputs = (logic) => (inputs) => {
  // 236.p
  const inputList = inputs.split('.')
  const inputDOM = inputList.map(
    (input, index, array) => {
      return logic[input]({})
    })
  return Input(null, inputDOM)
}

const evaluateLine = ({logic, html}, line) => {
  if (matches = line.trim().match(/(.+\s)->\s+?(.*)/)) {
    logic[matches[1].trim()] = evaluateRule(logic, matches[2].split(':'))
    return {
      html,
      logic: logic
    }
  }
  if (line.trim().match(/^(\S+):/)) {
    return {
      logic,
      html: html.concat(evaluateMove(logic, line.trim().split(':')))
    }
  }
  return {logic, html}
}

const evaluateMove = (logic, move) => {
  return logic[move[0]](move.slice(0), evaluateInputs(logic))
}

const evaluateRule = (logic, inputList) => {
  const component = logic[inputList[0]]
  const params = component.args.reduce(
    (params, argument, index) => {
      params[argument] = inputList[index + 1]
      return params
    }, {})
  return component.bind(null, params)
}

const evaluateFile = (file) => {
  const {html} = file.split('\n').reduce(evaluateLine, {logic: startingLogic, html:[]})
  return html;
}

const startingLogic = {
  'air': Air,
  'text': NormalText,
  '236': QC,
  '214': QC.bind(null, {'flip':true}),
  '623': DP,
  '421': DP.bind(null, {'flip':true}),
  '41236': HC,
  '63214': HC.bind(null, {'flip':true}),
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
  '(': LeftParen,
  ')': RightParen,
  'special': (params, evaluator) => htmlLoader({
    Move: require('../../elements/move/Move')
  })`
    <Move
      moveName="${params[1]}"
      moveInput=${evaluator(params[2])}
    />
  `,
  'super': (params, evaluator) => htmlLoader({
    Move: require('../../elements/move/Move')
  })`
    <Move
      typeColor='#d44336'
      moveName="${params[1]}"
      moveInput=${evaluator(params[2])}
    />
  `,
}

module.exports = {evaluateFile}
