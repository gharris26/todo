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
  try {
    const id = Number(req.params.id)
    await db.updateTask(id, req.body)
    res.sendStatus(204)
  } catch (error) {
    console.log('Failed to update task', error)
    res.sendStatus(500)
  }
})

router.delete('/del/:id', async (req, res) => {
  const { id } = req.params
  try {
    const deletedTask = await db.deleteTask(Number(id))
    if (deletedTask) {
      res
        .status(200)
        .json({ message: `Task with ID ${id} was deleted successfully` })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
