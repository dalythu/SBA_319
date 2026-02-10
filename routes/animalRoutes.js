import express from 'express'
import Animal from '../models/animalSchema.js'

const router = express.Router()

// Create
router
  .route('/')
  .post(async (req, res) => {
    let newAnimal = await Animal.create(req.body)

    res.json(newAnimal)
  })

  // Read
  .get(async (req, res) => {
    let allAnimals = await Animal.find({})

    res.json(allAnimals)
  })
// Update
router
  .route('/:id')
  .put(async (req, res) => {
    let updatedAnimal = await Animal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    )

    if (!updatedAnimal)
      return res.status(404).json({ error: 'Animal Not Found' })

    res.json(updatedAnimal)
  })
  // Delete
  .delete(async (req, res) => {
    let deletedAnimal = await Animal.findByIdAndDelete(req.params.id)

    if (!deletedAnimal)
      return res.status(404).json({ error: 'Animal Not Found' })
    res.json(deletedAnimal)
  })
  // Show One
  .get(async (req, res) => {
    let animal = await Animal.findById(req.params.id)

    if (!animal) return res.status(404).json({ error: 'Animal Not Found' })
    res.json(animal)
  })

export default router
