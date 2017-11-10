const html = require('tram-one').html()

const CustomText = ({
  text,
  font,
  x = 0, y = 0,
  stroke = text.length / 2,
  blur = false,
}) => {
  const fontSize = (font * 255 ) || 1020 / text.length
  const style = `
    transform: translateX(${x}px) translateY(${y}px)
  `
  const textBlur = 'text-shadow: black 0px 0px 1px, black 0px 0px 1px'
  return html`
    <g style=${style}>
      <g font-size="9.7214" letter-spacing="0" word-spacing="0" font-family="sans-serif" text-anchor="middle" stroke="#000" stroke-width="8.1012">
        <text style="line-height:0%;text-align:center" x="265.3037" y="545.8637" transform="matrix(.85746 0 0 .57173 21.922 -4.25)" font-size="${fontSize}">
          <tspan x="265.3037" y="545.8637" style="display: ${blur != '' ? 'inherit' : 'none'};${blur != '' ? textBlur : ''}; line-height:0;-inkscape-font-specification:'Impact Condensed';text-align:center" font-stretch="condensed" font-family="Impact" fill="#fff" stroke-width="${9 * (stroke ? stroke : 0)}">${text}</tspan>
          <tspan x="265.3037" y="545.8637" style="line-height:0;-inkscape-font-specification:'Impact Condensed';text-align:center" font-stretch="condensed" font-family="Impact" fill="#fff" stroke-width="${9 * (stroke ? stroke : 0)}">${text}</tspan>
        </text>
      </g>
    </g>
  `
}

CustomText.args = ['text', 'blur', 'font', 'x', 'y', 'stroke']

module.exports = CustomText
