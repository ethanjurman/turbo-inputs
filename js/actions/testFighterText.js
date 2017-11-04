module.exports = {
  init: () => `
p2x -> mi:1:p:p
p3x -> mi:1:p2x:p
p2x0 -> mi:0:p:p
p2xx -> mi:0.5:p:p
p3xx -> mi:0.5:p:p:p
character:RYU
special:should be 2 punches no overlap:236.p2x:: One Punch [p] Two Punch [p2x]
special:should be 1 punch (overlap):236.p2x0
special:should be 3 punches no overlap:236.p3x
special:should be 2 punches some overlap:236.p2xx
special:should be 3 punches some overlap:236.p3xx
special:Hadouken:236.p2x.k.p3x
special:Hadouken:236.p2xx.k.p3xx`,
  updateTestText: (text, newText) => newText
}
