const html = require('tram-one').html()

module.exports = ({text, colors}) => {
  let buttonColors = ["#0aff00", "#0aff00"]
  if (typeof colors === 'string') {
    buttonColors = [colors, colors]
  } else if (typeof colors === 'object'){
    buttonColors = colors
  }
  const id = buttonColors.join('').split('#').join('')
  const radialId = id + '-rid'
  return html`
    <g>
      <defs>
        <linearGradient id="${id}">
          <stop offset="0" stop-color="${buttonColors[1]}"/>
          <stop offset="1" stop-color="${buttonColors[0]}"/>
        </linearGradient>
        <radialGradient xlink:href="#${id}" id="${radialId}" cx="374.7093" cy="692.9971" fx="374.7093" fy="692.9971" r="295.5962" gradientUnits="userSpaceOnUse" gradientTransform="translate(-24.235)"/>
      </defs>

      <circle cx="350.4746" cy="692.9971" r="295.5962" fill="url(#${radialId})" fill-rule="evenodd" transform="translate(0 -343.7)"/>

      <text style="line-height:0%;text-align:center" x="285.8945" y="1043.8649" transform="matrix(1.22466 0 0 .81656 0 -343.7)" font-size="18.1118" font-family="sans-serif" letter-spacing="0" word-spacing="0" text-anchor="middle" stroke-width="15.0932">
        <tspan x="285.8945" y="1043.8649" style="line-height:1.25;-inkscape-font-specification:'Impact Condensed';text-align:center" font-stretch="condensed" font-size="513.4921" font-family="Impact" fill="#fff" stroke="#000" stroke-width="17.9529">${text}
        </tspan>
      </text>
    </g>
  `
}
