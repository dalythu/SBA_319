import mongoose from 'mongoose'

const animalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  age: { type: Number, min: 0 },
  diet: String,
  isEndangered: { type: Boolean, default: false },
})

export default mongoose.model('Animal', animalSchema)
