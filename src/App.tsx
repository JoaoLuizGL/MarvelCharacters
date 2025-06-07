import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import classes from './App.module.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className={classes.App}>
      <h1>Marvel Characters Info</h1>
      <p>Welcome to the Marvel Characters Info app! Here you can find information about your favorite Marvel characters.</p>
      <Outlet />
    </div>
  )
}

export default App
