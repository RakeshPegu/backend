import mongoose from 'mongoose'
const exampleSchema = new mongoose.Schema({
    name:String,
    value: Number
})
const Example = mongoose.model("Example", exampleSchema)
export default Example;