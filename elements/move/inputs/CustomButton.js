const html = require('tram-one').html()

module.exports = ({text, color}) => {
  return html`
    <g>
      <circle cx="250" cy="250" r="220" fill="${color || '#00ff03'}" fill-rule="evenodd"/>
      <text style="line-height:0%;text-align:center" x="250" y="500" transform="scale(1.22465 .81656)" font-size="13.8056" letter-spacing="0" word-spacing="0" font-family="sans-serif" text-anchor="middle" stroke-width="12">
        <tspan x="204" y="460" style="line-height:1.25;-inkscape-font-specification:'Impact Condensed';text-align:center" font-stretch="condensed" font-size="390" font-family="Impact" fill="#fff" stroke="#000" stroke-width="13.6845">${text}</tspan>
      </text>
    </g>
  `
}
