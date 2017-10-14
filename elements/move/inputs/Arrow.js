const html = require('tram-one').html()

module.exports = ({rotation}) => {
  const style = `
    transform: rotate(${rotation}deg)
  `
  return html`
    <svg style="${style}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="0 0 499.99998 500">
      <defs>
        <linearGradient id="arrowGradient">
          <stop offset="0" stop-color="#ffec00"/>
          <stop offset="1" stop-color="#ffa301"/>
        </linearGradient>
        <linearGradient xlink:href="#arrowGradient" id="b" x1="50.708" y1="568.076" x2="266.651" y2="568.076" gradientUnits="userSpaceOnUse" gradientTransform="translate(-46.727 333.454) scale(.83005)"/>
        <linearGradient xlink:href="#arrowGradient" id="d" gradientUnits="userSpaceOnUse" x1="50.708" y1="568.076" x2="266.651" y2="568.076" gradientTransform="rotate(90 -28.494 629.724) scale(.8794)"/>
        <linearGradient xlink:href="#arrowGradient" id="e" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 -28.494 629.724) scale(.8794)" x1="50.708" y1="568.076" x2="152.365" y2="436.648"/>
        <linearGradient xlink:href="#arrowGradient" id="f" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 .87497 .87497 0 -48.62 660.492)" x1="145.939" y1="37.913" x2="249.017" y2="89.839"/>
        <linearGradient xlink:href="#arrowGradient" id="c" gradientUnits="userSpaceOnUse" x1="50.708" y1="568.076" x2="266.651" y2="568.076" gradientTransform="matrix(.82483 0 0 .82483 -46.112 450.433)"/>
      </defs>
      <g transform="translate(0 -552.362)" stroke-linejoin="round"><circle cx="251.772" cy="806.177" r="146.734" fill="#bdbdbd" stroke="#747474" stroke-width="12.451"/>
      <circle cx="252.61" cy="804.5" r="81.46" fill="#727272" stroke="#3f3f3f" stroke-width="9.961"/>
      </g>
      <path d="M167.866 775.356H93.79v-59.26l-88.893 88.89L93.79 893.88v-59.112h74.076z" transform="translate(0 -552.362)" fill="url(#b)" fill-rule="evenodd" stroke="#000" stroke-width="13.482" stroke-linejoin="bevel"/>
    </svg>
  `
}