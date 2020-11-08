const functions = require('firebase-functions');
const admin = require('firebase-admin')
const cors = require('cors') ({origin: true})
const events = require('./db/events.js')

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://charlie-c65d3.firebaseio.com"
});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.events = functions.https.onRequest((req, res) => {
    return cors(req, res, async () => {
        try {
            const Events = await events.getEvents(admin.database())
            await website.updateViews(admin.database(), Events)
            return res.status(200).json(Events)

        } catch (err){
            return res.status(500).json(err)
        }
    })
})