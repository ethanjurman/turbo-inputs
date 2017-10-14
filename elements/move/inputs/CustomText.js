const html = require('tram-one').html()

module.exports = ({text}) => {
  const extraWidth = (text.length) - 3
  return html`
    <svg xmlns="http://www.w3.org/2000/svg" width="${48 + extraWidth * 6}" height="48" viewBox="${0 - extraWidth * 100} 0 ${708.66142 + extraWidth * 200} 708.66141">
      <defs>
        <filter id="blur" x="-.0788" width="1.1575" y="-.1403" height="1.2806" color-interpolation-filters="sRGB">
          <feGaussianBlur stdDeviation="12.7347"/>
        </filter>
      </defs>
      <g font-size="9.7214" font-family="sans-serif" letter-spacing="0" word-spacing="0" text-anchor="middle" stroke="#000" stroke-width="8.1012">
        <text style="line-height:0%;text-align:center" x="282.8539" y="1006.5119" transform="matrix(1.22466 0 0 .81656 0 -392.17)" filter="url(#blur)">
          <tspan x="282.8539" y="1006.5119" style="line-height:0;-inkscape-font-specification:'Impact Condensed';text-align:center" font-stretch="condensed" font-size="275.6145" font-family="Impact" fill="#fff" stroke-width="9.6361">${text}</tspan>
        </text>
        <text style="line-height:0%;text-align:center" x="283.3712" y="941.1191" transform="matrix(1.22466 0 0 .81656 0 -343.7)">
          <tspan x="283.3712" y="941.1191" style="line-height:0;-inkscape-font-specification:'Impact Condensed';text-align:center" font-stretch="condensed" font-size="275.6145" font-family="Impact" fill="#fff" stroke-width="9.6361">${text}</tspan>
        </text>
      </g>
    </svg>
  `
}
