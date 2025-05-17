// App.jsx
import React from "react";
import './App.css'
// router
import Router from './router/router'
// 
import { UserProvider } from './context/UserContext'
// body
function App() {
  return (
    <>
    <UserProvider>
      <Router/>
    </UserProvider>
    </>
  )
}

export default App
