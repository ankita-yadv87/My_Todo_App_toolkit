import React from 'react'
import AddTodo from './app/components/AddTodo'
import Todos from './app/components/Todos'

const App = () => {
  return (
    <>
      <h1 className="mt-4 text-center font-bold items-center px-4 py-2 rounded text-3xl">Welcome to Todo App
      </h1>
      <AddTodo/>
      <Todos/>
    </>

  )
}

export default App