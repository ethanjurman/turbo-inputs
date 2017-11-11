const html = require('tram-one').html()

const buttonStyle = (style) => `
  display: inline-block;
  background: white;
  font-weight: bold;
  border-radius: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 3px;
  cursor: pointer;
  user-select: none;
  text-align: center;
  text-decoration: none;
  color: black;
  ${style}
`

const hrefLink = (link) => {
  return () => {
    window.location.href = link
  }
}

module.exports = ({style='', onclick, href=""}, children) => html`
  <a class="PopButton"
    ${href != '' ? 'href' : 'ignore'}=${href}
    onclick=${onclick}
    style=${buttonStyle(style)}
  >
    ${children}
  </a>
`
