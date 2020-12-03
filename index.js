require('dotenv').config()
const express = require('express') 
const mongoose = require('mongoose')

const app = express()


// variables
const dbLink = process.env.DBLINK
const port = process.env.PORT
const userRouter = require('./src/routes/userRoute')

// database connection
mongoose.connect(dbLink,{ useNewUrlParser: true,
   useUnifiedTopology: true,
    useCreateIndex: true}, () => {
  app.listen(port, () => {
    console.info('DATABASE CONNECTED, SERVER IS APP')

  })
  //middlewares
  app.use(express.json())

  // routes
  app.use(userRouter)
  app.use('/something',express.static('public'))

  app.get('/', (rep,res) => {
    res.status(200).send('<h1> hey you, you dey town </h1>')

    
  })

})

