const html = require('tram-one').html()

module.exports = ({text, y}) => {
  const fontSize = 1020 / text.length
  const style = `
    transform: translateY(${y}px)
  `
  return html`
    <g style=${style}>
      <defs>
        <filter id="blur_text" x="-.0788" width="1.1575" y="-.1403" height="1.2806" color-interpolation-filters="sRGB">
          <feGaussianBlur stdDeviation="12.7347"/>
        </filter>
      </defs>
      <g font-size="9.7214" letter-spacing="0" word-spacing="0" font-family="sans-serif" text-anchor="middle" stroke="#000" stroke-width="8.1012">
        <text style="line-height:0%;text-align:center" x="282.8539" y="1006.5119" transform="matrix(.85747 0 0 .57173 6.873 -267.616)" font-size="${fontSize}" filter="url(#blur_text)">
          <tspan x="282.8539" y="1006.5119" style="line-height:0;-inkscape-font-specification:'Impact Condensed';text-align:center" font-stretch="condensed" font-family="Impact" fill="#fff" stroke-width="9.6361">${text}</tspan>
        </text>
        <text style="line-height:0%;text-align:center" x="265.3037" y="545.8637" transform="matrix(.85746 0 0 .57173 21.922 -4.25)" font-size="${fontSize}">
          <tspan x="265.3037" y="545.8637" style="line-height:0;-inkscape-font-specification:'Impact Condensed';text-align:center" font-stretch="condensed" font-family="Impact" fill="#fff" stroke-width="9.6361">${text}</tspan>
        </text>
      </g>
    </g>
  `
}
