import request from 'superagent'
import { Task } from '../../models/task'

const rootURL = '/api/v1/tasks'

export async function fetchTasks(): Promise<Task[]> {
  const res = await request.get(rootURL)
  return res.body
}

export async function fetchTaskById(id: number): Promise<Task> {
  const res = await request.get(`${rootURL}/${id}`)
  return res.body
}

export async function addTask(newTask: Task) {
  return await request.post(rootURL).send(newTask)
}

export async function deleteTaskById(id: number | undefined) {
  await request.del(`${rootURL}/${id}`)
}
