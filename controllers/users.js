const express = require('express')
// router will act like app has for us
const router = express.Router()
// bring in db
const db = require('../models')

//control our routes
router.get('/', (req, res)=> {
  // do what we need
  res.send('hey this is my users controller')
})

// export the router to have access to it
module.exports = router