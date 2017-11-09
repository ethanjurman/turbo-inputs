module.exports = `
p_hold -> p:#000:#7d9fbd:HOLD:1.3:135:0
hp -> p:#ff5722:#fff:HP
to_charge -> text:to charge

character:RYU
special:Hadouken:236.p
special:Shoryuken:623.p
special:Tatsumaki Senpukyaku / Air:(.air.).214.k
special:Joudan Sokutou Geri:41236.k
super:Super Art I - Shinkuu-Hadouken:236.236.p
super:Super Art II - Shin Shoryuken:236.236.p
super:Super Art III - Denjin Hadouken:236.236.p.(.p_hold.to_charge.)

character:KEN
special:Hadouken:236.p
special:Shoryuken:623.p
special:Tatsumaki Senpukyaku / Air:(.air.).214.k
super:Super Art I - Shoryureppa:236.236.p
super:Super Art II - Shinryuken:236.236.k::*Tap [k]
super:Super Art III - Shippu Jinraikyaku:236.236.k

xism -> tag:X-ISM:#a55
aism -> tag:A-ISM:#5a5
vism -> tag:V-ISM:#55a
or -> text:/

mk -> k:#42a5f5:#fff:MK
hk -> k:#1565c0:#fff:HK

p2 -> mi:0.5:p:p
2x -> ct:2x:1:1.3:60:130:2
p2x -> mi:-1:p2:2x

character:Rose
command:Soul Drain:(.4.or.6.).p2x:xism.aism.vism
command:Soul Fade:air.(.4.or.6.).p2x:xism.aism.vism
command:Sliding:3.mk:xism.aism.vism
command:Soul-piette:6.hk:aism.vism
special:Soul Spark:41236.p:xism.aism.vism
special:Soul Throw:623.p:xism.aism.vism
special:Soul Reflect:214.p:xism.aism.vism
special:Soul Spiral:236.k:xism.aism.vism
super:Aura Soul Spark:214.214.p:aism
super:Aura Soul Throw:236.2.3.p:xism.aism
super:Aura Illusion:236.2.3.k:aism
`
