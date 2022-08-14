import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './component/Navbar'
import  Meme from './component/Meme'


function App() {
  
  return (
    <div className="App">
     <Navbar/>
     <Meme/>
     </div>
  )
}

export default App;