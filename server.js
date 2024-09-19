import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import exampleRouter from './routes/example.js'
dotenv.config()
const PORT = process.env.PORT || 5000;
const app = express()
app.use(cors());
app.use(express.json())
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
app.get('/', (req, res)=>{
    res.status(200).json({message:"Thanks for passing by"})
})
app.use('/api', exampleRouter)
app.listen(PORT, ()=>{
    console.log(`The server is listening on port ${PORT}`)
})