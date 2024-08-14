import connection from './connection.ts'
import { Tasks } from '../../models/Tasks.ts'

export async function getAllTasks(): Promise<Tasks[]> {
  const taskData = await connection('tasks').select('*')
  return taskData as Tasks[]
}
