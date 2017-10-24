const htmlLoader = require('tram-one').html

const input = (ButtonComponent, defaultParams) => {
  const html = htmlLoader({ButtonComponent})
  return (params = defaultParams) => html`
    <g>
      <ButtonComponent bg='${params[0]}' fg='${params[1]}' />
      <CustomText text='${params[2]}' y='${params[3]}' />
    </g>
  `
}

const type = (TypeComponent, defaultParams) => {
  const html = htmlLoader({TypeComponent})
  return (params = defaultParams) => html`
    <Move
      typeColor=${params[0]}
      moveName=${params[1]}
      moveInput=${params[2]}
    />
  `
}

const text = (defaultParams) => {
  const html = htmlLoader()
  return (params = defaultParams) => html`
    <NormalText text="to charge" />
  `
}

module.exports = {
  input,
  type,
  text,
}
