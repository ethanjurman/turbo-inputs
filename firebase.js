// Initialize Firebase
const firebase = require('firebase-admin')
const serviceAccount = require('./api-key')

const config = {
  credential: firebase.credential.cert(serviceAccount)
  authDomain: "turboinputs.firebaseapp.com",
}

module.exports = firebase.initializeApp(config)
