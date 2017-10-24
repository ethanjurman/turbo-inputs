const html = require('tram-one').html()

translateXMatch = /translateX\((-?\d+)px\)/

const getTranslateX = (child) => {
  return +(child.style.transform.match(translateXMatch) || [0,0])[1]
}

module.exports = (attrs, children) => {
  const childElements = children.filter((child) => typeof child !== 'string')
  const childrenLength = childElements.length;
  let widthArray = []
  let totalWidth = 0
  const newChildren = childElements.map((child, index) => {
    const width = +child.getAttribute('width') || 500
    child.setAttribute('style', `transform: translateX(${totalWidth + getTranslateX(child)}px) ${child.style.transform}; transform-origin: 250px 250px;`)
    totalWidth += width
    widthArray.push(width)
    return child
  })
  return html`
    <svg width="${(totalWidth / 500) * 48}" height="48" viewBox="0 0 ${totalWidth} 500">
      ${newChildren}
    </svg>
  `
}
