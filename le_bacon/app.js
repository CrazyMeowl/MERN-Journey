require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
const port = 5000

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection

db.on('error',(error)=> console.error(error))
db.once('open',()=> console.log('Connected to database'))

app.use(express.json())

const mernRoutes = require('./routes/mern_routes')
const userRoutes = require('./routes/user_routes')
app.use('/api/mern',mernRoutes)
app.use('/api/user',userRoutes)


app.use(morgan('combined'))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})