const htmlLoader = require('tram-one').html

const Input = require('../../elements/move/Input')
const QC = require('../../elements/move/inputs/QC')
const Punch = require('../../elements/move/inputs/Punch')
const Kick = require('../../elements/move/inputs/Kick')

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
      return logic[input](array.slice(0))
    })
  return Input(null, inputDOM)
}


const evaluateLine = ({logic, html}, line) => {
  // line.match(`/->/`) // this match builds logic
  // line.match(`/^(.+):/`) // this line builds html
  if (line.trim() === ''){
    return {logic, html}
  }
  const moveParts = line.trim().split(':')
  return {
    html: html.concat(logic[moveParts[0]](
      moveParts.slice(0), evaluateInputs(logic)
    )),
    logic: logic
  }

}

const evaluateFile = (file) => {
  const {html} = file.split('\n').reduce(evaluateLine, {logic: startingLogic, html:[]})
  return html;
}

const startingLogic = {
  // input: input,
  236: QC,
  p: Punch,
  k: Kick,
  special: (params, evaluator) => htmlLoader({
    Move: require('../../elements/move/Move')
  })`
    <Move
      moveName="${params[1]}"
      moveInput=${evaluator(params[2])}
    />
  `
}

module.exports = {evaluateFile}
