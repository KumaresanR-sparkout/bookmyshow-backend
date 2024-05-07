import express from 'express'
import mongoose from 'mongoose'
import helmet from 'helmet'
import movieRouter from '../src/routes/movie-route'
import signupRouter from './routes/signup-route'
import loginRouter from '../src/routes/login-route'
import otpRouter from '../src/routes/otp-route'

require('dotenv').config()
const app = express()
app.use(express.json())
app.use(helmet())

app.use('/movies', movieRouter)
app.use('/signup', signupRouter)
app.use('/login', loginRouter)
app.use('/otp', otpRouter)

mongoose.connect(process.env.MONGO).then((connect) => {
    console.log("MongoDb connected Successfully")
}).catch((error) => console.log(error.message))



app.listen(process.env.PORT, () => {
    console.log(`server started at port ${process.env.PORT}`)
})
