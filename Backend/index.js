require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHendler = require('./middleware/ErrorHandlingMiddleware')


const PORT  = process.env.PORT || 5000

const app = express()
app.use(cors({origin:['http://localhost:3000']}))
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)



app.use(errorHendler)



app.get('/', (req, res) => {
    res.status(200).json({massage: 'WORKING!!!'})
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Port: ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()