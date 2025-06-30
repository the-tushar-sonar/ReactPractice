import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'

function App() {

  return (
    <UserContextProvider>
      <h1>Let's Learn Context Api</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
