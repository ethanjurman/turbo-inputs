const html = require('tram-one').html({
  LeftParen: require('./LeftParen')
})

module.exports = ({flip}) => html`
  <LeftParen flip />
`
