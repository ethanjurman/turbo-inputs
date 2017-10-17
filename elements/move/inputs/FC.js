const html = require('tram-one').html()
const getTransformStyle = require('../inputModifiers/getTransformStyle');

module.exports = (attrs) => html`
<svg style=${getTransformStyle(attrs)} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="0 0 499.99998 500">
  <defs>
    <linearGradient id="a">
      <stop offset="0" stop-color="#ffec00"/>
      <stop offset="1" stop-color="#ffa301"/>
    </linearGradient>
    <linearGradient xlink:href="#a" id="b" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 .87497 .87497 0 -48.62 660.492)" x1="145.939" y1="37.913" x2="249.017" y2="89.839"/>
  </defs>
  <g transform="translate(0 -552.362)" stroke-linejoin="round">
    <circle cx="275.843" cy="801.544" r="155.455" fill="#bdbdbd" stroke="#747474" stroke-width="13.191"/>
    <circle cx="276.731" cy="799.767" r="86.302" fill="#727272" stroke="#3f3f3f" stroke-width="10.553"/>
  </g>
  <path d="M277.846 643.208c-66.54 9.628-101.695 26.99-115.85 66.97l33.675 29.51L88.815 755.52 75.648 644.452l39.068 30.707c33.932-58.814 107.648-83.168 164.856-84.185 104.525-.558 203.71 94.512 206.146 201.18 2.966 129.873-103.68 216.84-203.55 220.052-124.417 4.004-214.552-103.51-216.077-200.64l.65-38.615 120.23 1.25-2.202 35-65.53.624c14.85 108.274 93.44 150.67 166.96 145.09 69.24-5.257 148.374-72.632 143.325-166.23-3.903-72.345-60.106-143.07-151.677-145.478z" fill="url(#b)" fill-rule="evenodd" stroke="#000" stroke-width="14.211" stroke-linejoin="bevel" transform="translate(0 -552.362)"/>
</svg>
`
