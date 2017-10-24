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

```
// Adding Comments
//
// Comments are ignored and are described using two forward slashes "//".
// Use them at your leisure!

// Adding a move
//
// An example of a Ryu's Tatsumaki (Hurricane Kick) is shown below:

special:Tatsumaki:(air).214.k

// "special"     is the type
// "Tatsumaki"   is the name
// "(air).214.k" is the input: air (optional), quarter circle back, kick

// Adding a type
//
// An example of a level 3 super is shown below:

level3 -> type:#f55:requires 3 bars
level3 -> type::requires 3 bars
aIsm -> type::A-ISM
xIsm -> type::X-ISM
zIsm -> type::Z-ISM

special.aIsm.xIsm:Switch to Crane Style:3kx

// "#f55"             is the color of the type
// "requires 3 bars"  is the notes of the type


// Adding a custom button
//
// You get Kick "k" and Punch "p" for free, anything else you'll have to define.
// Let's define a Low kick button that's light blue, and also can be shown as a "A" button (like for x box)
// A Low Kick example is shown below:

LK -> k:#90caf9:#fff:LK | cb:#2fa01e:A

// "LK"      is what we are defining
// "k"       is the base component (Kick)
// "#90caf9" is the background of the kick (light blue)
// "#fff"    is the foreground of the kick (white)
// "LK"      is the text that will be displayed in the bottom left
// "|"       is the divider to describe alternate controller schemes (arcade / xbox / etc...)
// "cb"      is another base component (Custom Button)
// "#2fa01e" is the background color of the custom button (green)
// "A"       is the text that will be shown for the button

// We can then use LK in any place of an input for a move.

// A move is constructed of a type, name, input and notes
// You get "command", "special", and "super" for free, anything else you'll have to define


air.214.k
lp.lp.6.lk.hp

```


```
sp -> special:::
special:Hadouken:236.p
special:Shoryuken:623.p
special:Tatsumaki Senpukyaku / Air:(air).214.k

folder structure
/game/version/character
i.e.
./Street Fighter II/
  Ryu.txt
  ./Turbo/
    .default
    Ryu.txt
  ./World Warriors/
    Ryu.txt

```
