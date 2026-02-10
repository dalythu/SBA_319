import express from 'express'
import Exhibit from '../models/exhibitSchema.js'

const router = express.Router()

// Create
router
  .route('/')
  .post(async (req, res) => {
    let newExhibit = await Exhibit.create(req.body)

    res.json(newExhibit)
  })

  // Read
  .get(async (req, res) => {
    let allExhibits = await Exhibit.find({})

    res.json(allExhibits)
  })
// Update
router
  .route('/:id')
  .put(async (req, res) => {
    let updatedExhibit = await Exhibit.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    )

    if (!updatedExhibit)
      return res.status(404).json({ error: 'Exhibit Not Found' })

    res.json(updatedExhibit)
  })
  // Delete
  .delete(async (req, res) => {
    let deletedExhibit = await Exhibit.findByIdAndDelete(req.params.id)

    if (!deletedExhibit)
      return res.status(404).json({ error: 'Exhibit Not Found' })
    res.json(deletedExhibit)
  })
  // Show One
  .get(async (req, res) => {
    let exhibit = await Exhibit.findById(req.params.id)

    if (!exhibit) return res.status(404).json({ error: 'Exhibit Not Found' })
    res.json(exhibit)
  })

export default router
