import mongoose from 'mongoose'

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  yearsExperience: { type: Number, min: 0 },
  shift: {
    type: String,
    required: true,
    enum: ['Day', 'Night'],
  },
})

export default mongoose.model('Employee', employeeSchema)
