import express from 'express'
import * as db from '../db/tasks.ts'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const tasks = await db.getAllTasks()

    res.send(tasks)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const tasks = await db.getAllTasksById(parseInt(id))
    console.log(tasks)

    res.send(tasks)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})
