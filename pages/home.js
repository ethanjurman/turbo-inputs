const Tram = require('tram-one')
const html = Tram.html({
  PopButton: require('../elements/PopButton'),
  PopInput: require('../elements/PopInput'),
})

const centerStyle = `
  text-align: center;
`

const headerStyle = `
  font-family: 'Permanent Marker', cursive;
`

const inputStyle = `
`

const clickLinkFunction = (link, newTab = false) => {
  () => {
    if (newTab) {
      window.open(link, '_blank');
    }
    window.location.href = link
  }
}

module.exports = (store, actions) => {
  return html`
    <div style=${centerStyle}>
      <h1 style=${headerStyle}> TURBO INPUTS </h1>
      <p> The place to find all your inputs </p>
      <PopButton onClick=${clickLinkFunction('https://github.com/ethanjurman/turbo-inputs')}>
        GitHub
      </PopButton>
      <PopButton onClick=${clickLinkFunction('/customTextPage')}>
        Build a Command List
      </PopButton>
      <h2 style=${headerStyle}> GAME SEARCH </h2>
      <PopInput style=${inputStyle} onInput=${(v) => {console.log(v)}} defaultText="Search Game"/>
    </div>
  `
}
