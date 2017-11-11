const Tram = require('tram-one')
const firebase = require('./firebase')
const sideBar = require('./js/actions/sideBar')
const fighterData = require('./js/actions/fighterData')
const customFighterText = require('./js/actions/customFighterText')
const reader = require('./js/actions/reader')
const games = require('./js/actions/games')
const gameSearchText = require('./js/actions/gameSearchText')
const gameSearchObject = require('./js/actions/gameSearchObject')

const app = new Tram()
app.addRoute('/', require('./pages/home'))
app.addRoute('/404', require('./pages/404'))
app.addRoute('/game/:gameId', require('./pages/gamePage'))
app.addRoute('/customTextPage', require('./pages/CustomTextPage'))
app.addActions({
  customFighterText,
  reader,
  fighterData,
  sideBar,
  games,
  gameSearchText,
  gameSearchObject,
})
app.start('.main')
