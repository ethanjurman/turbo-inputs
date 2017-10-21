const Tram = require('tram-one')
const htmlLoader = Tram.html
const getTransformStyle = require('./getTransformStyle')

module.exports = (component) => {
  const html = htmlLoader({
    WrappingComponent: component
  });

  return (attrs = {}) => html`
    <g style=${getTransformStyle(attrs)}>
      <WrappingComponent ${attrs} />
    </g>
  `
}
