import connectDB from '../db/conn.js'
import Animal from '../models/animalSchema.js'
import Employee from '../models/employeeSchema.js'
import Exhibit from '../models/exhibitSchema.js'

const seedData = async () => {
  try {
    await connectDB()

    // Clear existing data (optional but recommended)
    await Animal.deleteMany()
    await Employee.deleteMany()
    await Exhibit.deleteMany()

    // Animals
    await Animal.insertMany([
      {
        name: 'Lion',
        species: 'Panthera leo',
        age: 5,
        diet: 'Carnivore',
        isEndangered: true,
      },
      {
        name: 'Penguin',
        species: 'Spheniscidae',
        age: 12,
        diet: 'Fish',
        isEndangered: true,
      },
      {
        name: 'Elephant',
        species: 'Loxodonta',
        age: 25,
        diet: 'Herbivore',
        isEndangered: true,
      },
      {
        name: 'Giraffe',
        species: 'Giraffa camelopardalis',
        age: 8,
        diet: 'Herbivore',
      },
      { name: 'Zebra', species: 'Equus quagga', age: 6, diet: 'Herbivore' },
    ])

    // Employees
    await Employee.insertMany([
      { name: 'Alex', role: 'Zookeeper', yearsExperience: 5, shift: 'Day' },
      {
        name: 'Morgan',
        role: 'Veterinarian',
        yearsExperience: 10,
        shift: 'Day',
      },
      { name: 'Taylor', role: 'Security', yearsExperience: 3, shift: 'Night' },
      {
        name: 'Jordan',
        role: 'Maintenance',
        yearsExperience: 7,
        shift: 'Night',
      },
      { name: 'Riley', role: 'Guide', yearsExperience: 2, shift: 'Day' },
    ])

    // Exhibits
    await Exhibit.insertMany([
      {
        name: 'Savannah',
        habitatType: 'Grassland',
        capacity: 10,
        isIndoor: false,
      },
      {
        name: 'Arctic Zone',
        habitatType: 'Tundra',
        capacity: 6,
        isIndoor: true,
      },
      {
        name: 'Rainforest Dome',
        habitatType: 'Tropical',
        capacity: 8,
        isIndoor: true,
      },
      {
        name: 'Desert Habitat',
        habitatType: 'Desert',
        capacity: 5,
        isIndoor: false,
      },
      {
        name: 'Aquatic Center',
        habitatType: 'Marine',
        capacity: 12,
        isIndoor: true,
      },
    ])

    console.log('Database seeded successfully')
    process.exit()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

seedData()
