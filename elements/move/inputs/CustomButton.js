const html = require('tram-one').html()

const CustomButton = ({
  text = '',
  color = '#00ff03',
  fontSize = 1.2 - (text.length * 0.2),
  fontX = 0,
  fontY = -30 * (text.length - 1)
}) => html`
  <g>
    <circle cx="250" cy="250" r="220" fill="${color}" fill-rule="evenodd"/>
    <text style="line-height:0%;text-align:center" transform="scale(1.25 .8)" letter-spacing="0" word-spacing="0" font-family="sans-serif" text-anchor="middle" stroke-width="12">
      <tspan x="${204 + +fontX}" y="${460 + +fontY}" style="line-height:1.25;-inkscape-font-specification:'Impact Condensed';text-align:center" font-stretch="condensed" font-size="${390 * fontSize}" font-family="Impact" fill="#fff" stroke="#000" stroke-width="13.6845">${text}</tspan>
    </text>
  </g>
`

CustomButton.args = ['color', 'text', 'fontSize', 'fontX', 'fontY']

module.exports = CustomButton
