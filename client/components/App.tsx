import AddTodo from './AddTodo.tsx'
import ToDoList from './ToDoList.tsx'

function App() {
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main"></section>
      <ToDoList />
      <footer className="footer"></footer>
    </>
  )
}

export default App
