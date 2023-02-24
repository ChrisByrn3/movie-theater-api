const express = require("express")
const userRouter = express.Router()
const {User, Show} = require("../models/index")
userRouter.use(express.json())
userRouter.use(express.urlencoded({extended:true}))

//get all users
userRouter.get('/', async (req, res) => {
    const users = await User.findAll()
    res.send({users})
  })
  
  //get one user
userRouter.get('/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id)
    res.send({user})
})


userRouter.get('/:userid/shows', async (req, res) => {
    const userShows = await Show.findAll({ where: {
      UserId: req.params.userid
    }})
    console.log(`This is the value of the userID ${req.params.userid}`)
    console.log(userShows)
    res.json(userShows)
})

  //A route that will ‘add’ a show if you have watched it.
userRouter.put('/:userid/shows/:showid', async (req, res) => {
    await Show.update({
      UserId: req.params.userid
    },{
      where: {
        id: req.params.showid
      }
    })
    res.send(`show updated!`)
})

module.exports = userRouter
    
    
