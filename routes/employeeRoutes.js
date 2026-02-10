import express from 'express'
import Employee from '../models/employeeSchema.js'

const router = express.Router()

// Create
router
  .route('/')
  .post(async (req, res) => {
    let newEmployee = await Employee.create(req.body)

    res.json(newEmployee)
  })

  // Read
  .get(async (req, res) => {
    let allEmployees = await Employee.find({})

    res.json(allEmployees)
  })
// Update
router
  .route('/:id')
  .put(async (req, res) => {
    let updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    )

    if (!updatedEmployee)
      return res.status(404).json({ error: 'Employee Not Found' })

    res.json(updatedEmployee)
  })
  // Delete
  .delete(async (req, res) => {
    let deletedEmployee = await Employee.findByIdAndDelete(req.params.id)

    if (!deletedEmployee)
      return res.status(404).json({ error: 'Employee Not Found' })
    res.json(deletedEmployee)
  })
  // Show One
  .get(async (req, res) => {
    let employee = await Employee.findById(req.params.id)

    if (!employee) return res.status(404).json({ error: 'Employee Not Found' })
    res.json(employee)
  })

export default router
