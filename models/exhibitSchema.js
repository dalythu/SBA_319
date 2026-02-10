import mongoose from 'mongoose'

const exhibitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  habitatType: { type: String, required: true },
  capacity: { type: Number, min: 1 },
  isIndoor: { type: Boolean, default: false },
})

exhibitSchema.index({ habitatType: 1, isIndoor: 1 })

export default mongoose.model('Exhibit', exhibitSchema)
