import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Manager from './Components/Manager'
import Footer from './Components/footer'

function App() {


  return (
    <>
      <Navbar />
      <div className="min-h-[85vh]">
        <Manager />
      </div>
      <Footer />
    </>
  )
}

export default App
