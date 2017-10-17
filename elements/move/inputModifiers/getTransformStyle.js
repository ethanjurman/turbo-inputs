module.exports = ({rotation, flip}) => {
  return `
    transform: rotate(${rotation || 0}deg) scaleX(${flip ? -1 : 1});
  `
}
