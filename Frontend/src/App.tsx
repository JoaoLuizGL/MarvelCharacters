import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import classes from './App.module.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className={classes.App}>
      <img className={classes.logo} src="../marvel_logo.png" alt="Logo da Marvel" />
      <h1>Marvel Dictionary</h1>
      <Outlet />
    </div>
  )
}

export default App
