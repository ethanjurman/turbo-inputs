const Tram = require('tram-one')

const app = new Tram()
app.addRoute('/', require('./pages/home'))
app.addRoute('/404', require('./pages/404'))
app.addRoute('/testPage', require('./pages/testPage'))
app.addRoute('/testPageRyu', require('./pages/testPageRyu'))
app.start('.main')
