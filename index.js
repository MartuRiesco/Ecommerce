const express = require ('express')
const dbConnect = require('./config/dbConect')
const app = express()
const dotenv = require ('dotenv').config()
const PORT = process.env.PORT ||4000
const authRouter = require('./routes/authRouter')
const bodyParser = require('body-parser')
const { notFound, errorHandler } = require('./middlewares/errorHandler')
dbConnect()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))


app.use("/api/user", authRouter)

app.use(notFound)
app.use(errorHandler)
app.listen(PORT, ()=>{
    console.log(`Server is running at PORT ${PORT}`);
    
})