const html = require('tram-one').html({
  CustomText: require('./CustomText')
})
const InputTransformWrapper = require('../inputModifiers/InputTransformWrapper')

const Kick = ({
  bg = '#000',
  fg = '#b0c5de',
  text = '',
  fontSize = '1.2',
  fontY = '180',
  fontX = '-100'
}) => html`
  <g style="transform: scale(0.8); transform-origin: 250px 250px">
    <circle cx="251.7652" cy="247.4002" r="221.0744" fill-rule="evenodd" fill="${bg}" stroke="${bg}" stroke-width=".865"/>
    <g fill="${fg || '#b0c5de'}" fill-rule="evenodd" stroke="${bg}" stroke-width="21.3503">
      <path d="M251.7472 414.544l-68.2958 67.397-57.512-100.646s20.6684-21.567 17.9726-39.5395c-13.4794-29.6546-42.2355-34.1478-57.512-40.4382C63.934 277.0543 5.5234 125.1863 12.7124 80.255c0 0 35.0464-22.4656 46.7286-19.7697 40.5817 14.7857 70.01 66.5526 100.4648 121.756C216.446 284.7272 251.747 414.544 251.747 414.544z"/>
      <path d="M489.0026 222.238s-5.392-104.2406-71.89-144.6788c0 0-79.978 68.2956-139.2873 122.2132-31.452 0-106.9365-6.2904-141.983-53.9176-25.1614-34.1478-25.1614-64.701-78.1804-80.8763-24.172 52.5964 34.5604 158.559 58.4106 185.117 26.9587 20.6684 27.8575 24.263 40.438 39.5396 25.1617 28.756 69.1944 141.0844 76.3833 137.49 10.7835 7.1887 227.3525-177.9282 256.1085-204.887z"/>
    </g>
    <CustomText text="${text}" y='${fontY}' x='${fontX}'  stroke='3' font='${fontSize}' />
  </g>
`

module.exports = InputTransformWrapper(
  Kick,
  ['bg','fg','text','fontSize','fontY','fontX']
)
