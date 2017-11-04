const htmlLoader = require('tram-one').html

const NoteInputJoiner = (attrs, children) => htmlLoader()`
  <div style=${attrs.style}> ${children} </div>
`
const Character = require('../../elements/Character')
const Input = require('../../elements/move/Input')
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

const {
  input,
  type,
  text,
} = require('./componentTypes')

const evaluateInputs = (logic) => (inputs) => {
  if (!inputs) {
    return '';
  }
  const inputList = inputs.split('.')
  return inputList.map(
    (input, index, array) => {
      if (logic[input].name.match(/NormalText/)) {
        return logic[input]({})
      }
      if (logic[input].name.match(/Tag/)) {
        return logic[input]({})
      }
      if (logic[input].name.match(/MultiInput/)) {
        return logic[input]({})(logic)
      }
      return Input(null, [logic[input]({})])
    })
}

const evaluateNotes = (logic) => (note) => {
  const style = `
    display: inline-block;
    transform: translateY(0.4em);
    font-size: 1.5em;
  `
  return note.split(/[\[\]]/).map((text, index) => {
    return index % 2 ? NoteInputJoiner({style}, evaluateInputs(logic)(text)) : text
  })
}

const evaluateLine = ({logic, html, characters, current, errors}, line, lineNum) => {
  let matches
  let followUp = 0
  try {
    if (line == null || line == '' || line.match(/^\/\//)) {
      return { html, current, logic, characters, errors }
    }
    if (matches = line.trim().match(/^character:(.+)/)) {
      const characterName = matches[1].trim()
      const characterHtml = Character({characterName})
      characters[characterName] = [characterHtml]
      return {
        html: html.concat(characterHtml),
        current: characterName,
        logic,
        characters,
        errors,
      }
    }
    if (matches = line.trim().match(/^(\S+\s)->\s+?(.*)/)) {
      const newRule = {
        [matches[1].trim()]: evaluateRule(logic, matches[2].split(':'))
      }
      return {
        html,
        logic: Object.assign({}, newRule, logic),
        characters,
        current,
        errors,
      }
    }
    if (matches = line.match(/^([>>\s]+)?(.*)/)) {
      const move = evaluateMove(logic, matches[2].trim().split(':'), (line.trim().match(/\>\>\s/g) || []).length)
      characters[current].push(move)
      return {
        html: html.concat(move),
        logic,
        characters,
        current,
        errors,
      }
    }
    return {logic, html, characters, current, errors}
  } catch (error) {
    if (localStorage.showErrors == 'true') {
      console.error(error)
    }
    return {errors: [lineNum, ...errors], logic, html, characters, current}
  }
}

const evaluateMove = (logic, move, followUp) => {
  return logic[move[0]](
    move.slice(0),
    evaluateInputs(logic),
    evaluateNotes(logic),
    followUp
  )
}

const evaluateRule = (logic, inputList) => {
  const component = logic[inputList[0]]
  if (component.name === 'move') {
    return component.apply(null, [inputList.slice(0)])
  }
  const params = (component.args || []).reduce(
    (params, argument, index) => {
      params[argument] = inputList[index + 1]
      return params
    }, {})
  const newComponent = component.bind(null, params)
  newComponent.args = logic[inputList[0]].args
  return newComponent
}

const evaluateFile = (file) => {
  const result = file.split('\n').reduce(
    evaluateLine,
    {logic: startingLogic, html:[], characters:{}, current:'', errors: []}
  )
  return result;
}

const startingLogic = {
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

module.exports = {evaluateFile}
