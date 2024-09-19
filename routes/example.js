import express from 'express'
import Example from '../models/exampleModel.js';
const router = express.Router()
router.get('/example', async(req, res)=>{
    try {
        const data = await Example.find();
        res.status(200).json(data)
        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
})
export default router;