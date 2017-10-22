module.exports = ({rotation = 0, flip, x = 0 , y = 0}) => {
  return `
    transform: translateX(${x}px) translateY(${y}px) rotate(${rotation}deg) scaleX(${flip ? -1 : 1});
    transform-origin: 250px 250px;
  `
}
