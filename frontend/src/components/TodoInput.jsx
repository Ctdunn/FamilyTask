import { useState } from "react"

export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props
    const [priority, setPriority] = useState('medium')
    
    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter new task..." />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
            </select>
            <button onClick={() => {
                if (todoValue.trim()) {
                    handleAddTodos({ text: todoValue, priority })
                    setTodoValue('')
                    setPriority('medium')
                }
            }}>Add</button>
        </header>
    )
}