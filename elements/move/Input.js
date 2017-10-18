const html = require('tram-one').html()
const inputMap = require('./inputMap');

module.exports = (attrs, children) => {
  const childElements = children.filter((child) => typeof child !== 'string')
  const childrenLength = childElements.length;
  const newChildren = childElements.map((child, index) => {
    // child.style.transform = `${index * 500}px ${child.style.transform}`
    child.setAttribute('style', `transform: translateX(${index * 500}px) ${child.style.transform}; transform-origin: 250px 250px;`)
    return child
  })
  return html`
    <svg xmlns="http://www.w3.org/2000/svg" width="${48 * childrenLength}" height="48" viewBox="0 0 ${500 * childrenLength} 500">
      ${newChildren}
    </svg>
  `
}
