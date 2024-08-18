// eslint-disable-next-line no-unused-vars
import { Task } from '../../models/task'

function ToDoList() {
  const tasks = [
    { id: 1, task: 'folding the laundry', priority: 'low', completed: true },
    { id: 2, task: 'vacuuming the carpet', priority: 'low', completed: false },
    { id: 3, task: 'buying groceries', priority: 'high', completed: false },
  ] as Task[]

  return (
    <>
      <div className="taskListContainer">
        {tasks.map((task) => (
          <div key={task.id} className="task-list">
            <p className="taskName">{task.task}</p>
            <input className="toggle" type="checkbox" />
          </div>
        ))}
      </div>
    </>
  )
}

export default ToDoList
