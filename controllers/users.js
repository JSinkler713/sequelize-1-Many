const express = require('express')
// router will act like app has for us
const router = express.Router()
// bring in db
const db = require('../models')

//control our routes

// this path is really localhost:8000/users/
router.get('/', (req, res)=> {
  // get all users
  db.user.findAll()
  .then( allUsers=> {
    res.render('allUsers', { allUsers })
  })

})

// this will be a user show page
router.get('/:id', (req, res)=> {
  // this will be a show page for a user
  db.user.findOne({ 
    where: {
      id: req.params.id
    },
    include: [db.pet]
  })
  .then( user=> {
    // we will get back a pets property
    console.log(user.pets)
    // we will show all the animals
    res.render('userShow', { user })
  })
  // we will a have a form to make a new animal

})

// export the router to have access to it
module.exports = router