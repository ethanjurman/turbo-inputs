const functions = require('firebase-functions')
const firebase = require('firebase-admin')
const express = require('express')
const bodyParser = require('body-parser')

const firebaseApp = firebase.initializeApp(
  functions.config().firebase
)

const getGame = (gameId, callback) => {
  const ref = firebaseApp.database().ref("gameInputs")
  return ref.child(gameId).on('value', snap => callback(snap.val()))
}

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.text())
app.use(bodyParser.json())

app.get('/gameId', (req, res) => {
  if (!req.query.gameId) {
    res.render('index', 'no game id')
  }
  getGame(req.query.gameId, (gameData) => {
    res.send(gameData)
  })
})

app.get('/publish', (req, res) => {
  const ref = firebaseApp.database().ref("gameInputs")
  const pushRef = ref.push()
  pushRef.set(req.body)
  res.send(pushRef.key)
})


exports.app = functions.https.onRequest(app)
