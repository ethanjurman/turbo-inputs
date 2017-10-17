const html = require('tram-one').html()
const getTransformStyle = require('../inputModifiers/getTransformStyle');

module.exports = (attrs) => html`
<svg style=${getTransformStyle(attrs)} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="0 0 499.99998 500">
  <defs>
    <linearGradient id="a">
      <stop offset="0" stop-color="#ffec00"/>
      <stop offset="1" stop-color="#ffa301"/>
    </linearGradient>
    <linearGradient xlink:href="#a" id="b" gradientUnits="userSpaceOnUse" x1="50.708" y1="568.076" x2="266.651" y2="568.076" gradientTransform="translate(-46.112 450.433) scale(.82483)"/>
  </defs>
  <g transform="translate(0 -552.362)" stroke-linejoin="round">
    <circle cx="275.843" cy="801.544" r="155.455" fill="#bdbdbd" stroke="#747474" stroke-width="13.191"/>
    <circle cx="276.731" cy="799.767" r="86.302" fill="#727272" stroke="#3f3f3f" stroke-width="10.553"/>
  </g>
  <path d="M272.66 778.754l-190.764 2.638 33.89 38.253 83.133 87.5-105.4-1.76V830.67L5.188 919l88.334 88.335v-58.74H285.1L168.89 821.963l102.89 3.018z" fill="url(#b)" fill-rule="evenodd" stroke="#000" stroke-width="13.397" stroke-linejoin="bevel" transform="translate(0 -552.362)"/>
</svg>
`
