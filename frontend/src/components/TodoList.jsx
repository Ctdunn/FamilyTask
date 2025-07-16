import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const { todos } = props


    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard {...props} key={todoIndex} index={todoIndex}>
                        <p>{todo.text || todo}</p>
                        <span className={`priority-badge priority-${todo.priority || 'medium'}`}>
                            {todo.priority ? todo.priority.toUpperCase() : 'MEDIUM'}
                        </span>
                    </TodoCard>
                )
            })}
        </ul>
    )
}
