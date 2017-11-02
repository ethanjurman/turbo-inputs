# Turbo Inputs
Turbo Inputs is your one stop shop of all your fighting game move lists.

## Developement Instructions
1. In the root directory, run `npm install` to install all the project dependencies
2. Run `npm start` to start the dev server
3. Navigate to http://localhost:9966 (or the url provided after running `npm start`)

## Developement Commands
Below are a list of commands used for developement. The logic for all the commands are in the local `package.json`
- `npm start` - starts a server hosting the webapp on localhost using budo; will live update with changes
- `npm run build` - builds a final distributable using browserify
- `npm test` - runs tests in jasmine

## Turbo Inputs Language
So if there is a game which doesn't yet exist on turbo inputs, I've created a language that will make it easy (hopefully) to add your own lists

## General syntax
The fighting input language has two types of syntaxs depending on what you are writing.

Dot delimitation is used for inputs and tags. Any time you need to define multiple inputs or tags, simply put a `.` with no space. For example if I wanted to place a punch input after a quarter circle forward, I could write that as `236.p` where `236` is the quarter circle motion, and `p` is shorthand for punch.

Colon delimitation is used for everything else. When writing characters, moves, new inputs, or anything that isn't a input or tag, use colons between each parameter. Most parameters are optional, and can be skipped or ignored.

### Defining keywords
You can define and alias things for later use by using an `->`, like below
```
qcf -> 236
```
With the line above, you could write `qcf` anywhere you would write `236`. Read the sections below about what parameters keywords take in.

## Games & Characters
A game and version can be declared using the syntax:
```
game:Street Fighter II:Turbo
```
Where "Street Fighter II" is the game, and "Turbo" is the version (version is optional).

Characters can be added by the syntax below
```
character:Ryu
```
Once you put a character line, all moved below it will belong to that character (until you write a new character or version line)

## Moves
A move is constructed of 5 parts
```
special:Hadouken:236.p:projectile:speed changes based on level of [p]
```
The parts are as follows: move type, move name, move input, tags, and notes. Notes takes in anything, and if you want to reference an input, place it in square brackets `[ ]` to have it display correctly. You can read more about the other parameters in their respective sections. All parts are optional.

### Defining move types
You can define your own move type with the syntax below
```
command -> move:#bbb
```
Where `#bbb` is the color you want to use for the move. As with all colors, 3 or 6 digit hexadecimal is accepted. The text inside the move is automatically adjusted to be black or white depending on this color.

## Inputs
As mentioned above, a string of inputs can be expressed with dots between them.

Defined by default are the following, along with their parameters for making new inputs based on these existing ones:

Input | keyword | arguments
--- | --- | ---
Punch | `p` | background color, foreground color, overlay text, text size, horizontal text offset, vertical text offset
Kick | `k` | background color, foreground color, overlay text, text size, horizontal text offset, vertical text offset
Custom button | `cb` | button color, text, text size, horizontal text offset, vertical text offset
Custom text | `ct` | text, shadow, size, horizontal offset, vertical offset, stroke width
Air | `air` | no extra parameters
Next | `>` | no extra parameters
Left paren | `(` | flip
Right paren | `)` | no extra parameters
Arrow | `6` | flip, rotation
Motion | `236` | flip, rotation

So if you needed to create a hold punch button, you could do so by this syntax
```
p_hold -> p:#000:#7d9fbd:HOLD:1.3:135:0
```

## Tags
Tags are simple

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
super:Super Art II - Shinryuken:236.236.k::Tap [k]
super:Super Art III - Shippu Jinraikyaku:236.236.k
