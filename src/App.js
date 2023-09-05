import React from 'react'
import './index.css' 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap' 
import MayNav from './components/navbar/MayNav'
import Landing from './components/landing/landing'
import About from './components/about/About'
import Contact from './components/contact/contact'
import Portfolio from './components/Portfolio/Portfolio'

const App = () => {
  
  return (
    <>
    <Container>
    <BrowserRouter>
      <MayNav/>
    <Routes>
      <Route path='/' element={<Landing/>}/> 
      <Route path='/about' element={<About/>}/> 
      <Route path='/portfolio' element={<Portfolio/>}/> 
      <Route path='/contact' element={<Contact/>}/> 
    </Routes>
    </BrowserRouter>
    </Container>
    </>

  )
}

export default App
