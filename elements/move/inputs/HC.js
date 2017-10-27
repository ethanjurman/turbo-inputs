const html = require('tram-one').html()
const InputTransformWrapper = require('../inputModifiers/InputTransformWrapper')

const HC = () => html`
<g>
  <g transform="translate(-26.73 -549.767)" stroke-linejoin="round">
    <circle r="143.7884" cy="799.7672" cx="276.7315" fill="#bdbdbd" stroke="#747474" stroke-width="12.2008"/>
    <circle r="78.6612" cy="799.7672" cx="276.7315" fill="#727272" stroke="#3f3f3f" stroke-width="9.6184"/>
  </g>
  <g fill="#ffec00" fill-rule="evenodd" stroke="#000">
    <path d="M403.2358 195.3732l66.2913 66.2912H336.9447z" stroke-width="10.4167"/>
    <path d="M185.05 236.107l.842 39.1003-72.7307 2.7964S84.2427 281.781 76.94 280.435c-2.8955-14.4783-4.3228-39.9884-4.3228-39.9884z" stroke-width="13.5417"/>
  </g>
  <g fill="none" stroke-linejoin="round">
    <path d="M404.1515 260.7793a154.528 154.528 0 0 1-146.064 143.5368A154.528 154.528 0 0 1 97.8196 276.8336" stroke="#000" stroke-width="55.9271"/>
    <path d="M404.5242 251.0788a154.528 154.528 0 0 1-78.666 133.548 154.528 154.528 0 0 1-154.983-1.8935A154.528 154.528 0 0 1 95.4955 247.303" stroke="#ffec00" stroke-width="31.4961"/>
  </g>
</g>
`

module.exports = InputTransformWrapper(HC)
