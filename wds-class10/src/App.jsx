import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoList } from './components/TodoList'
import { Name } from './components/Name'
import { NameFunc } from './components/NameFunc'


function App() {
 
  return (
    <>
      <NameFunc name="Agent 1" age={1}></NameFunc>
      <NameFunc name="Agent 4" age={7}></NameFunc>
      <h1>Todo List</h1>
      <TodoList></TodoList>
      
    </>
  )
}

export default App
