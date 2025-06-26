// import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import React from "react"
import NavBar from './Navbar/NavBar'
import Routing from './Routing/Routing'
import Advantages from './components/Advantages'
import Footer from './components/Footer'
import AllProducts from './components/AllProducts'
import Home from './components/Home'
// import Hero from './components/Hero'
import Sass from './components/Sass'
import Hero from './components/Hero'








function App() {
  // const [count, setCount] = useState(0)

  return (
  <>
    
   
    
    

    {/* <Heading/>
    <Garage/>
    <EventBind/> */}
    {/* <Searching/>  */}
    <NavBar /> 
    {/* <Home /> */}
     <Routing />
    
     
    
    {/* <AllProducts /> */}
    {/* <Advantages />
    <Footer /> */}
   {/* <Hero /> */}
  {/* <Sass /> */}
  {/* <Hero /> */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
