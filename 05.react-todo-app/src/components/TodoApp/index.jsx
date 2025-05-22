import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { FaTrashCan } from "react-icons/fa6";

const TodoApp = () => {

    const [todos, setTodos] = useState(() => {
        const localData = localStorage.getItem('todos');
        // return localData ? JSON.parse(localData) : []
        if (localData !== null) {
            return JSON.parse(localData)
        }
        return []
    })
    const [todoText, setTodoText] = useState("")
    const [errorStatus, setErrorStatus] = useState(false)
    const [filterValue, setFilterValue] = useState("all")

    const FILTER = {
        ALL: "all",
        COMPLETED: "completed",
        PENDING: "pending",
    }

    const filteredTodos = todos.filter((todo) => {
        switch (filterValue) {
            case FILTER.PENDING:
                return todo.completed === false
            case FILTER.COMPLETED:
                return todo.completed === true

            default:
                return todo
        }
    })


    const handleAddTodo = (e) => {
        e.preventDefault()


        if (todoText === "") {
            setErrorStatus(true)
            return
        }

        const newTodo = {
            id: nanoid(),
            todoText: todoText,
            completed: false,
            createdAt: new Date().toLocaleString()
        }

        setTodos([...todos, newTodo])

        localStorage.setItem("todos", JSON.stringify([...todos, newTodo]))
        // setTodos([...todos, newTodo])

        console.log(todos);


        setTodoText("")
        setErrorStatus(false)
    }


    const handleDeleteTodo = (todoId) => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId)
        setTodos(updatedTodos)

        localStorage.setItem("todos", JSON.stringify(updatedTodos))
    }

    const handleToggle = (id) => {
        // const updatedTodos = todos.map(todo => {
        //     if (todo.id === id) {
        //         return { ...todo, completed: !todo.completed }
        //     }
        //     return todo
        // })
        const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)

        setTodos(updatedTodos)

        localStorage.setItem("todos", JSON.stringify(updatedTodos))
    }

    return (
        <div>
            <main id="content" role="main" className="w-full  max-w-md mx-auto p-6">
                <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
                    <div className="p-4 sm:p-7">
                        <div className="text-center">
                            <h2>Todo App</h2>
                        </div>
                        <div className="my-5">
                            <form onSubmit={handleAddTodo}>
                                <div className="flex">
                                    <div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="todo"
                                                name="todo"
                                                placeholder='enter todo here..'
                                                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                                onChange={(e) => { setTodoText(e.target.value.trim()) }}
                                                value={todoText}
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 text-black-500"
                                    >
                                        Add
                                    </button>
                                </div>
                            </form>
                            {
                                errorStatus && <p className="text-xs text-red-600 mt-2">
                                    Input is empty!
                                </p>
                            }
                        </div>

                        <hr />
                        <div className='my-3'>

                            <select className='border-3' onChange={(e) => {
                                setFilterValue(e.target.value)
                            }}>
                                <option value="all">All Todos</option>
                                <option value="pending">All Pending</option>
                                <option value="completed">All Completed</option>
                            </select>
                            {
                                todos.length > 0 && (
                                    <button className='bg-red-300 p-3' onClick={() => {
                                        setTodos([])
                                        localStorage.setItem("todos", JSON.stringify([]))
                                    }}>
                                        delete all
                                    </button>
                                )
                            }
                        </div>

                        <hr />

                        {
                            todos.length === 0 ? (<p className='text-red-600'>no todo item yet!</p>) : (
                                <ul className="divide-y divide-gray-200 px-4">
                                    {filteredTodos.map((todo) => {
                                        return (<li className="py-4" key={todo.id}>
                                            <div className="flex items-center">
                                                <input
                                                    name="completed"
                                                    type="checkbox"
                                                    checked={todo.completed}
                                                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                                    onChange={() => {
                                                        handleToggle(todo.id)
                                                    }}
                                                />
                                                <label htmlFor="todo1" className="ml-3 block text-gray-900">
                                                    <span className="text-lg font-medium mr-3" style={{
                                                        textDecoration: todo.completed ? 'line-through' : 'none'
                                                    }}>{todo.todoText}</span>
                                                    <span className="text-sm font-light text-gray-500 mr-3">
                                                        Created at: {todo.createdAt}
                                                    </span>
                                                    <FaTrashCan className='text-red-400 cursor-pointer' onClick={() => {
                                                        handleDeleteTodo(todo.id)
                                                    }} />
                                                </label>
                                            </div>
                                        </li>)
                                    })}
                                </ul>
                            )
                        }




                        <div>

                        </div>
                    </div>
                </div>

            </main>

        </div>
    )
}

export default TodoApp
