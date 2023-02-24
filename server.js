const express = require("express")
const app = express()
const seed = require("./seed")

const userRouter = require("./routes/userRoutes")
//const showsRouter = require("./routes/shows")
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/users", userRouter)
//app.use("/shows", showsRouter)

// Load the items in the database
seed()

//homepage
app.get('/', (req, res) => {
    res.send(`HOME PAGE!`)
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
