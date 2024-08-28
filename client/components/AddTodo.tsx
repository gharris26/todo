import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Task } from '../../models/task'
import { addTask } from '../apis/apiClient'

// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const [newTask, setNewTask] = useState('')
  const [newPriority, setNewPriority] = useState('')
  const queryClient = useQueryClient()

  const addMutation = useMutation({
    mutationFn: (task: Task) => addTask(task),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['tasks'] }),
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
  }

  const handlePriorityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPriority(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    addMutation.mutate({
      task: newTask,
      priority: newPriority,
      completed: false,
    })
  }

  return (
    <>
      <div>
        <h2 className="disclaimer">
          Submit your tasks to add them to the list and click the check box to
          remove them!
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task: </label>
        <input onChange={handleChange} value={newTask} id="task"></input>
        <label htmlFor="priority">Priority: </label>
        <input
          onChange={handlePriorityChange}
          value={newPriority}
          id="priority"
        ></input>
        <br></br>
        <button>Submit</button>
      </form>
    </>
  )
}

export default AddTodo
