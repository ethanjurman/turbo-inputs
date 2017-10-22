const html = require('tram-one').html()

module.exports = (attrs, children) => {
  const childElements = children.filter((child) => typeof child !== 'string')
  const childrenLength = childElements.length;
  let addedXArray = []
  let totalAddedX = 0
  const newChildren = childElements.map((child, index) => {
    const addedX = +child.getAttribute('addedX') || 0
    child.setAttribute('style', `transform: translateX(${(index * 500) + addedXArray[index - 1]}px) ${child.style.transform}; transform-origin: 250px 250px;`)
    totalAddedX += addedX
    addedXArray.push(addedX)
    return child
  })
  return html`
    <svg xmlns="http://www.w3.org/2000/svg" width="${(48 * childrenLength) + (totalAddedX / 48) }" height="48" viewBox="0 0 ${(500 * childrenLength) + totalAddedX} 500">
      ${newChildren}
    </svg>
  `
}
