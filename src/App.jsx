import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Special from './pages/Special/Special'
import SpecialItem from './pages/SpecialItem/SpecialItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-sans">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/special' element={<Special/>}/>
        <Route path='/specialItem/:id' element={<SpecialItem/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
