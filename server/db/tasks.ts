import connection from './connection.ts'
import { Task } from '../../models/task.ts'

const db = connection

export async function getAllTasks(): Promise<Task[]> {
  const tasks = await connection('tasks').select('*')
  return tasks as Task[]
}

export async function addTask(data: Task) {
  const [id] = await db('tasks').insert(data)
  return id
}

export async function getAllTasksById(id: number) {
  const task = await db('tasks').select().where({ id }).first()
  return task as Task
}

export async function updateTask(id: number, data: Task) {
  return db('tasks').where({ id }).update(data)
}

export async function deleteTask(id: number): Promise<Task | null> {
  return db('tasks').where({ id }).del()
}
