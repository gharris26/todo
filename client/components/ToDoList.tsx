// eslint-disable-next-line no-unused-vars
import { useQuery } from '@tanstack/react-query'
import { fetchTasks } from '../apis/apiClient'

function ToDoList() {
  const {
    data: tasks,
    isPending,
    isError,
  } = useQuery({ queryKey: ['tasks'], queryFn: () => fetchTasks() })

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error...</p>
  }

  return (
    <>
      <div className="taskListContainer">
        {tasks.map((task, i) => (
          <div key={i} className="task-list">
            <p className="taskName">{task.task}</p>
            <input className="toggle" type="checkbox" />
          </div>
        ))}
      </div>
    </>
  )
}

export default ToDoList
