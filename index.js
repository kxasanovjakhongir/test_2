import express from 'express'
import { config } from 'dotenv'
config()

const PORT=process.env.PORT || 3001

const app=express()
// Middleware
app.use("/",(req,res,next)=>{
    res.send('Serverga ulanish ...')
    next()
})

app.listen(PORT,()=>{
    console.log(`${PORT} is running ... `);
})