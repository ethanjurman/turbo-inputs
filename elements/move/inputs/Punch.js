const html = require('tram-one').html({
  CustomText: require('./CustomText')
})
const InputTransformWrapper = require('../inputModifiers/InputTransformWrapper')

const Punch = ({
  bg = '#000',
  fg = '#ffddad',
  text = '',
  fontSize = '1.2',
  fontY = '180',
  fontX = '-100'
}) => html`
  <g style="transform: scale(0.8); transform-origin: 250px 250px">
    <circle cx="275.7563" cy="256.2026" r="219.918" fill-rule="evenodd" fill="${bg}" stroke="${bg}" stroke-width=".8605"/>
    <g fill="${fg}" fill-rule="evenodd" stroke="${bg}" stroke-linejoin="round">
      <path d="M96.1485 138.9552c-36.654 18.272-76.7043 37.095-80.5247 55.566C9.5762 223.759 44.2294 257.096 139.8795 389.397l81.764-53.3612zm164.883-85.8244C292.4224 32.8952 333.186.768 361.185 14.9796c16.0313 8.137 33.3228 86.9946 78.161 165.766l-76.2764 37.6605z" stroke-width="22.1235"/>
      <path d="M103.373 139.3866l81.0125-46.9093L303.321 281.2836 225.4 328.9482zm81.0125-46.9093l76.646-39.3465 102.038 165.2753-84.928 19.261z" stroke-width="16.8646"/>
      <path d="M306.15 306.262l92.0743-54.5296 9.833 8.9393-256.5568 144.816s24.136 47.378 48.272 50.06c24.136 1.7877 52.7418-24.136 67.9385-12.515 23.242 20.56 33.0753 44.6962 61.681 47.378 22.348 0 130.513-58.999 134.9827-92.9684 4.4697-22.348-8.0454-41.1205-16.9846-67.0444 0 0 34.8633-16.9848 35.7573-41.1208-7.1514-65.2567-7.1514-65.2567-16.9846-129.6192-25.924-37.5448-71.514 13.409-197.5577 80.4534z" stroke-width="22.1235"/>
    </g>
    <CustomText text="${text}" y='${fontY}' x='${fontX}' stroke='3' font='${fontSize}' />
  </g>
`

module.exports = InputTransformWrapper(
  Punch,
  ['bg','fg','text','fontSize','fontY','fontX']
)
