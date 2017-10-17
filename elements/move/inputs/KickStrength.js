const html = require('tram-one').html()

const makeID = (colors) => colors.join('').split('#').join('')

const getStrengthComponent = (str) => {
  switch (str) {
    case 'LK': return {text: 'LK', colors: ['#46d5d3', '#46d5d3']}
    case 'MK': return {text: 'MK', colors: ['#49a5ff', '#49a5ff']}
    case 'HK': return {text: 'HK', colors: ['#0200f1', '#0200f1']}
    default: return {text: '', colors: []}
  }
}

module.exports = ({strength, text, color}) => {
  let colors = color
  if (typeof color === 'string') {
    colors = [color, color]
  }
  let component = getStrengthComponent(strength)
  component.text = text || component.text
  component.colors = colors || component.colors

  const id = makeID(component.colors)
  const radID = id + 'rid'

  return html`
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="0 0 708.66142 708.66141">
      <defs>
        <linearGradient id="${id}">
          <stop offset="0" stop-color="${component.colors[0]}"/>
          <stop offset="1" stop-color="${component.colors[1]}" stop-opacity=".975"/>
        </linearGradient>
        <radialGradient xlink:href="#${id}" id="${radID}" cx="362.74" cy="668.291" fx="362.74" fy="668.291" r="314.835" gradientUnits="userSpaceOnUse"/>
      </defs>
      <g transform="translate(0 -343.7)" fill-rule="evenodd">
        <path d="M312.83 944.716l-49.91 31.994-49.91-108.778s8.957-46.07 5.118-71.666c-19.196-42.232-75.505-63.988-75.505-63.988-21.755-3.84-113.897-212.437-103.66-276.425 0 0 5.12-23.035 21.756-19.196-6.195 46.65 29.848 143.25 65.008 225.864 22.344 52.5 79.663 52.644 107.75 97.93 41.853 67.487 79.35 184.266 79.35 184.266z" fill="${component.colors[1]}" stroke="${component.colors[1]}" stroke-width="50.675"/>
        <path d="M678.837 628.62s0-107.5-81.904-175.326c0 0-110.058 83.183-194.52 159.968-44.792 0-149.732-2.56-208.6-60.148-35.833-48.63-28.154-112.618-95.98-134.373-47.222 32.672 44.098 224.527 78.064 262.35 38.392 16.635 46.07 7.677 63.987 29.433 35.833 40.952 85.743 218.836 95.98 213.717 15.358 10.238 301.347-264.854 342.973-295.62z" fill="${component.colors[1]}" stroke="${component.colors[1]}" stroke-width="50.675"/>
        <circle cx="362.74" cy="668.291" r="314.835" fill="url(#${radID})"/>
      </g>
      <g fill="#fff" fill-rule="evenodd" stroke="#000" stroke-width="12.669">
        <path d="M312.83 601.016l-49.91 31.993-49.91-108.78s8.957-46.07 5.118-71.665c-19.196-42.232-48.357-51.318-75.505-63.987-21.755-3.84-113.897-212.438-103.66-276.425 0 0 5.12-23.036 21.756-19.197-6.195 46.652 29.848 143.25 65.008 225.864 22.344 52.5 79.663 52.643 107.75 97.93 41.853 67.486 79.35 184.266 79.35 184.266z"/>
        <path d="M678.837 284.918s0-107.498-81.904-175.325c0 0-110.058 83.184-194.52 159.968-44.792 0-149.732-2.558-208.6-60.147-35.833-48.63-28.154-112.617-95.98-134.373-47.222 32.672 50.497 210.45 69.105 252.11 34.554 29.434 29.435 20.476 76.785 52.47 46.07 47.35 81.904 206.04 92.142 200.92 15.357 10.238 312.205-268.474 342.972-295.622z"/>
      </g>
      <text style="line-height:0%" x="70.437" y="1279.199" transform="matrix(1.22466 0 0 .81656 0 -343.7)" font-family="sans-serif" letter-spacing="0" word-spacing="0" stroke-width="10">
        <tspan x="70.437" y="1279.199" style="line-height:1.25;-inkscape-font-specification:'Impact Condensed'" font-stretch="condensed" font-size="362.357" font-family="Impact" fill="#fff" stroke="#000" stroke-width="12.669">${component.text}</tspan>
      </text>
    </svg>
  `
}
