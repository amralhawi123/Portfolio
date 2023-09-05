import React from 'react'
import './Maynav.css'
import { Nav, Navbar } from 'react-bootstrap'

const MayNav = () => {
  return (
       <div className='myNav'>
      <Navbar    expand="lg" data-bs-theme="dark">
      <Navbar.Brand href="#home" className='fs-4'>El-Hawi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto links">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
     </div>

  )
}

export default MayNav
