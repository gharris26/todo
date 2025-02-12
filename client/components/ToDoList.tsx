// eslint-disable-next-line no-unused-vars
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchTasks } from '../apis/apiClient'
import { deleteTaskById } from '../apis/apiClient'
import { useState } from 'react'

function ToDoList() {
  const [isChecked] = useState(false)

  const {
    data: tasks,
    isPending,
    isError,
  } = useQuery({ queryKey: ['tasks'], queryFn: () => fetchTasks() })
  const queryClient = useQueryClient()

  const deleteMutation = useMutation({
    mutationFn: (id: number | undefined) => deleteTaskById(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['tasks'] }),
  })

  const handleCheckboxChange = (id: number | undefined) => {
    if (!id) return
    deleteMutation.mutate(id)
  }

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
            <h3 className="taskName">
              I need to be...{task.task}, priority: {task.priority}
            </h3>
            <div className="input-group">
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleCheckboxChange(task.id)}
                />
                Click to Complete
              </label>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ToDoList
