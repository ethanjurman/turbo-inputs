const html = require('tram-one').html({
  CustomText: require('./CustomText')
})

module.exports = ({text, color, fill}) => {
  let inputColor = color || '#46d5d3'

  return html`
    <g>
      <g transform="matrix(.69474 0 0 .69474 .626 -239.1)" fill="${inputColor}" fill-rule="evenodd">
        <path d="M312.83 944.716l-49.91 31.994-49.91-108.778s8.957-46.07 5.118-71.666c-19.196-42.232-75.505-63.988-75.505-63.988-21.755-3.84-113.897-212.437-103.66-276.425 0 0 5.12-23.035 21.756-19.196-6.195 46.65 29.848 143.25 65.008 225.864 22.344 52.5 79.663 52.644 107.75 97.93 41.853 67.487 79.35 184.266 79.35 184.266z" stroke="${inputColor}" stroke-width="50.675"/>
        <path d="M678.837 628.62s0-107.5-81.904-175.326c0 0-110.058 83.183-194.52 159.968-44.792 0-149.732-2.56-208.6-60.148-35.833-48.63-28.154-112.618-95.98-134.373-47.222 32.672 44.098 224.527 78.064 262.35 38.392 16.635 46.07 7.677 63.987 29.433 35.833 40.952 85.743 218.836 95.98 213.717 15.358 10.238 301.347-264.854 342.973-295.62z" stroke="${inputColor}" stroke-width="50.675"/>
        <circle cx="362.74" cy="668.291" r="314.835"/>
      </g>
      <g fill="${fill || '#fff'}" fill-rule="evenodd" stroke="#000" stroke-width="12.669">
        <path d="M217.9606 417.2302l-34.6744 22.2267-34.6744-75.5737s6.2228-32.0065 3.5557-49.7884c-13.3362-29.3402-33.5954-35.6526-52.4562-44.4543-15.114-2.6677-79.1285-147.5887-72.0165-192.043 0 0 3.557-16.0038 15.1147-13.3367-4.304 32.411 20.7366 99.5212 45.1635 156.9162 15.5233 36.4738 55.345 36.573 74.858 68.0357 29.077 46.885 55.1275 128.0165 55.1275 128.0165z" stroke-width="8.80166106"/>
        <path d="M472.2395 197.625s0-74.683-56.9018-121.805c0 0-76.4615 57.791-135.1404 111.1358-31.1187 0-104.0245-1.777-144.9223-41.7864-24.8946-33.785-19.5597-78.2393-66.681-93.354-32.807 22.6985 35.0822 146.2076 48.01 175.1504 24.0058 20.449 20.4495 14.2254 53.3453 36.453 32.0066 32.8957 56.9018 143.1437 64.0145 139.5866 10.669 7.1127 216.9007-186.519 238.2757-205.3798z" stroke-width="8.80166106"/>
      </g>
      <CustomText text="${text || ''}" y='180' x='-100' font='1.5' />
    </g>
  `
}
