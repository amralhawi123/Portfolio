import React from 'react'
import './Maynav.css'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MayNav = () => {
  return (
       <div className='myNav'>
      <Navbar    expand="lg" data-bs-theme="dark">
      <Navbar.Brand href="#home" className='fs-4'>El-Hawi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto links">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/portfolio">PORTFOLIO</Link>
            <Link to="/contact">CONTACT</Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
     </div>

  )
}

export default MayNav
