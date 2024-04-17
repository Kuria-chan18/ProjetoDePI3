
import './App.css'

// reaproveitamento de estruturas 
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import NavFooter from './components/NavFooter'
import MyContext from '../src/context/AuthContext'
import {useState} from 'react'
function App() {
  const[password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  return (
    <section>
      <MyContext.Provider value={{username,setUsername, password,setPassword}}>
        <NavBar/>
        <Outlet/>
        <NavFooter/>
      </MyContext.Provider>
      
      
    </section>
  )
}

export default App
