const express=require('express')
const connectDBS=require("./Database/DatabaseSystem")
const router=require('./Router/Route')
const dotenv=require('dotenv')
const cors=require('cors')


const app=express()

app.use(express.json())

app.use(cors())

connectDBS()
dotenv.config()

app.use('/',router)



const PORT=process.env.PORT || 5000;

 app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))