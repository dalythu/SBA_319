import mongoose from 'mongoose'

const animalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  age: { type: Number, min: 0 },
  diet: String,
  isEndangered: { type: Boolean, default: false },
})

animalSchema.index({ species: 1, isEndangered: 1 })

export default mongoose.model('Animal', animalSchema)
