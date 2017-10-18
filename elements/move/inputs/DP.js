const html = require('tram-one').html()
const getTransformStyle = require('../inputModifiers/getTransformStyle');

module.exports = (attrs) => html`
<g style=${getTransformStyle(attrs)}>
  <g transform="translate(-26.732 -549.767)" stroke-linejoin="round">
    <circle r="143.7884" cy="799.7672" cx="276.7315" fill="#bdbdbd" stroke="#747474" stroke-width="12.2008"/>
    <circle r="78.6612" cy="799.7672" cx="276.7315" fill="#727272" stroke="#3f3f3f" stroke-width="9.6184"/>
  </g>
  <path d="M228.624 228.4733l184.026 2.5448-32.693 36.902-80.1966 84.4093 101.677-1.6978v-72.076l85.211 85.21-85.2138 85.215v-56.6652H216.6234L328.7287 270.156l-99.2558 2.9115z" fill="#ffec00" fill-rule="evenodd" stroke="#000" stroke-width="12.9227"/>
</g>
`
