const Tram = require('tram-one')
const htmlLoader = Tram.html
const getTransformStyle = require('./getTransformStyle')

module.exports = (component, argumentsList) => {
  const html = htmlLoader({
    WrappingComponent: component
  });

  const finalComponent = (attrs) => html`
    <g style=${getTransformStyle(attrs)}>
      <WrappingComponent ${attrs} />
    </g>
  `
  finalComponent.args = argumentsList
  return finalComponent
}
