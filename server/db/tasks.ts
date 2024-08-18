import connection from './connection.ts'
import { Task } from '../../models/task.ts'

const db = connection

export async function getAllTasks(): Promise<Task[]> {
  return db('tasks').select()
}

export async function getAllTasksById(id: number): Promise<Task> {
  return db('tasks').where({ id }).select().first()
}

export async function addTask(newTask: Task) {
  return db('tasks').insert(newTask)
}

export async function updateTask(id: number, data: Task) {
  return db('tasks').where({ id }).update(data)
}

export async function deleteTask(id: number): Promise<Task | null> {
  return db('tasks').where({ id }).del()
}
