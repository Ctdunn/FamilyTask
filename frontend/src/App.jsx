import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

const API_URL = "http://localhost:8000"

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  async function fetchTodos() {
    try {
      const response = await fetch(`${API_URL}/todos/`)
      const data = await response.json()
      setTodos(data)
    } catch (error) {
      console.error('Error fetching todos:', error)
    }
  }

  async function handleAddTodos(newTodo) {
    try {
      const response = await fetch(`${API_URL}/todos/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      })
      const data = await response.json()
      setTodos([...todos, data])
    } catch (error) {
      console.error('Error adding todo:', error)
    }
  }

  async function handleDeleteTodo(index) {
    const todoToDelete = todos[index]
    try {
      await fetch(`${API_URL}/todos/${todoToDelete.id}`, {
        method: 'DELETE',
      })
      const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index)
      setTodos(newTodoList)
    } catch (error) {
      console.error('Error deleting todo:', error)
    }
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited.text)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  )
}

export default App