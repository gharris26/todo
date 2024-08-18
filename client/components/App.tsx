import AddTodo from './AddTodo.tsx'
import ToDoList from './ToDoList.tsx'

function App() {
  return (
    <>
      <header className="header">
        <h1 className="title">What does Georgia need to do today?</h1>
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
