const html = require('tram-one').html()

const containerElement = (followUpCount) => `
`

const leftElement = (followUpCount) => `
margin-left: ${(followUpCount - 1) * 1.5}em;
float:left;
`

const rightElement = (followUpCount) => `
display:inline-block;
width:calc(100% - (${(followUpCount - 1) * 1.5}em + 48px));
`

module.exports = ({followUpCount}, children) => {
  return html`
    <div style=${containerElement(followUpCount)}>
      <div style=${leftElement(followUpCount)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 500 500">
          <path d="M172.921 304.2756l142.2137 3.7127-13.85 46.7084s76.5374-33.1196 131.434-65.717c-57.7083-43.8583-131.434-65.717-131.434-65.717l18.4667 39.7836s-67.8977 6.5564-120.5857-15.397C172.8217 237.4043 55.163 132.7306 55.163 132.7306z" fill-rule="evenodd" stroke="#000" stroke-width=".4173"/>
        </svg>
      </div>
      <div style=${rightElement(followUpCount)}>
        ${children}
      </div>
    </div>
  `
}
