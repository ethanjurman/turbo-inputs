const htmlLoader = require('tram-one').html

const NoteInputJoiner = (attrs, children) => htmlLoader()`
  <div style=${attrs.style}> ${children} </div>
`
const Character = require('../../elements/Character')
const Input = require('../../elements/move/Input')
const startingLogic = require('./startingLogic')

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
    font-size: 28px;
    position: relative;
    top: 0.4em;
    margin-top: -0.4em;
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
      if (Object.keys(characters).indexOf(characterName) !== -1) {
        return { html, current: characterName, logic, character, errors }
      }
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
      console.error(line, error)
    }
    return {errors: errors.concat([[lineNum, line]]), logic, html, characters, current}
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
  return file.split('\n').reduce(
    evaluateLine,
    {logic: startingLogic, html:[], characters:{}, current:'', errors: []}
  )
}

module.exports = {evaluateFile}
