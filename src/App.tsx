import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import classes from './App.module.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className={classes.App}>
      <img className={classes.logo} src="../public/marvel_logo.svg" alt="Logo da Marvel" />
      <h1>Marvel Characters Info</h1>
      <Outlet />
    </div>
  )
}

export default App
