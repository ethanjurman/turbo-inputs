const html = require('tram-one').html()
const InputTransformWrapper = require('../inputModifiers/InputTransformWrapper')

const Arrow = () => {
  return html`
  <g>
    <g transform="translate(-26.732 -549.767)" stroke-linejoin="round">
      <circle r="143.7884" cy="799.7672" cx="276.7315" fill="#bdbdbd" stroke="#747474" stroke-width="12.2008"/>
      <circle r="78.6612" cy="799.7672" cx="276.7315" fill="#727272" stroke="#3f3f3f" stroke-width="9.6184"/>
    </g>
    <path d="M346.3947 223.8467h65.3842V171.54L490.2414 250l-78.4626 78.4635v-52.176h-65.3843z" fill="#ffec00" fill-rule="evenodd" stroke="#000" stroke-width="11.8976"/>
  </g>
  `
}

module.exports = InputTransformWrapper(Arrow)
