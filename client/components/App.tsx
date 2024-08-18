import AddTodo from './AddTodo.tsx'
import ToDoList from './ToDoList.tsx'

function App() {
  return (
    <>
      <header className="header">
        <h1>Georgia&apos;s List</h1>
      </header>
      <section className="main">
        <AddTodo />
        <ToDoList />
      </section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
