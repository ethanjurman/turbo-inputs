const html = require('tram-one').html()
const getTransformStyle = require('../inputModifiers/getTransformStyle');

module.exports = (attrs) => html`
<svg style=${getTransformStyle(attrs)} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="0 0 499.99998 500">
  <defs>
    <linearGradient id="a">
      <stop offset="0" stop-color="#ffec00"/>
      <stop offset="1" stop-color="#ffa301"/>
    </linearGradient>
    <linearGradient xlink:href="#a" id="b" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 -28.494 629.724) scale(.8794)" x1="50.7082" y1="568.0765" x2="152.3653" y2="436.6479"/>
  </defs>
  <g transform="translate(0 -552.362)" stroke-linejoin="round">
    <circle cx="275.8432" cy="801.5438" r="155.4554" fill="#bdbdbd" stroke="#747474" stroke-width="13.1908"/>
    <circle cx="276.7315" cy="799.7672" r="86.302" fill="#727272" stroke="#3f3f3f" stroke-width="10.5527"/>
  </g>
  <path d="M120.624 807.086h75.2205l-94.176-94.176-94.176 94.176h57.65c16.1674 255.6318 386.983 288.0904 419.5593 5.8076l.5816-41.648-120.8365 1.2562 2.2145 35.1755 65.8603.6282c-29.8475 217.6396-313.6567 171.6248-311.898-1.2195z" fill="url(#b)" fill-rule="evenodd" stroke="#000" stroke-width="14.283" stroke-linejoin="bevel" transform="translate(0 -552.362)"/>
</svg>
`
