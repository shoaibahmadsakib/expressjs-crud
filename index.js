const express = require('express')
const dataBase = require('./utils/db')
const app = express()
const port = 3000 || process.env.PORT
const cors = require('cors')
const userRouter = require('./router/v1/User.router')



app.use(express.json())
app.use(cors())


dataBase()

app.use('/api/v1/user', userRouter)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))