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

router.post('/add', async (req, res) => {
  const task = req.body
  try {
    await db.addTask(task)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const task = await db.getAllTasksById(Number(req.params.id))
    res.json(task)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.patch('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.updateTask(id, req.body)
    res.sendStatus(200)
  } catch (error) {
    console.log('Failed to update task', error)
    res.sendStatus(500)
  }
})

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.deleteTask(id)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
